"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export default function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = 800 // Fixed height for the section
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Node class for neural network
    class Node {
      x: number
      y: number
      radius: number
      color: string
      pulseSpeed: number
      pulseSize: number
      maxPulse: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = 3
        this.color = theme === "dark" ? "#a855f7" : "#7c3aed"
        this.pulseSpeed = Math.random() * 0.02 + 0.01
        this.pulseSize = 0
        this.maxPulse = Math.random() * 10 + 5
      }

      update() {
        this.pulseSize += this.pulseSpeed
        if (this.pulseSize > this.maxPulse) {
          this.pulseSize = 0
        }
      }

      draw() {
        if (!ctx) return

        // Draw pulse
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius + this.pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = 0.1 * (1 - this.pulseSize / this.maxPulse)
        ctx.fill()

        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = 0.8
        ctx.fill()
      }
    }

    // Create neural network nodes
    const layers = [4, 8, 12, 8, 4] // Number of nodes in each layer
    const nodes: Node[][] = []
    const layerSpacing = canvas.width / (layers.length + 1)

    for (let i = 0; i < layers.length; i++) {
      const layerNodes: Node[] = []
      const nodeCount = layers[i]
      const layerX = layerSpacing * (i + 1)
      const nodeSpacing = canvas.height / (nodeCount + 1)

      for (let j = 0; j < nodeCount; j++) {
        const nodeY = nodeSpacing * (j + 1)
        layerNodes.push(new Node(layerX, nodeY))
      }

      nodes.push(layerNodes)
    }

    // Connect nodes with lines
    function connectNodes() {
      if (!ctx) return

      for (let i = 0; i < nodes.length - 1; i++) {
        const currentLayer = nodes[i]
        const nextLayer = nodes[i + 1]

        for (const currentNode of currentLayer) {
          for (const nextNode of nextLayer) {
            ctx.beginPath()
            ctx.strokeStyle = theme === "dark" ? "#a855f7" : "#7c3aed"
            ctx.globalAlpha = 0.1
            ctx.lineWidth = 0.5
            ctx.moveTo(currentNode.x, currentNode.y)
            ctx.lineTo(nextNode.x, nextNode.y)
            ctx.stroke()
          }
        }
      }
    }

    // Animation loop
    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      connectNodes()

      for (const layer of nodes) {
        for (const node of layer) {
          node.update()
          node.draw()
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [mounted, theme])

  if (!mounted) return null

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ opacity: 0.3 }} />
}

