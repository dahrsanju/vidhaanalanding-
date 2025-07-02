// Logo diagnostic script to test logo loading
import { promises as fs } from "fs"
import path from "path"

async function diagnoseLogo() {
  console.log("🔍 Starting logo diagnostic...\n")

  try {
    // Check if logo file exists
    const logoPath = path.join(process.cwd(), "public", "logo.svg")
    console.log("📁 Checking logo file path:", logoPath)

    try {
      const logoStats = await fs.stat(logoPath)
      console.log("✅ Logo file exists")
      console.log("📊 File size:", logoStats.size, "bytes")
      console.log("📅 Last modified:", logoStats.mtime)

      // Read logo content
      const logoContent = await fs.readFile(logoPath, "utf8")
      console.log("📄 Logo content length:", logoContent.length, "characters")

      // Check if it's valid SVG
      if (logoContent.includes("<svg") && logoContent.includes("</svg>")) {
        console.log("✅ Valid SVG structure detected")
      } else {
        console.log("❌ Invalid SVG structure")
      }

      // Check for common SVG attributes
      const hasViewBox = logoContent.includes("viewBox")
      const hasWidth = logoContent.includes("width")
      const hasHeight = logoContent.includes("height")

      console.log("🔍 SVG Attributes:")
      console.log("  - viewBox:", hasViewBox ? "✅" : "❌")
      console.log("  - width:", hasWidth ? "✅" : "❌")
      console.log("  - height:", hasHeight ? "✅" : "❌")
    } catch (error) {
      console.log("❌ Logo file not found or inaccessible")
      console.log("Error:", error.message)

      // Check public directory
      try {
        const publicDir = path.join(process.cwd(), "public")
        const files = await fs.readdir(publicDir)
        console.log("📁 Files in public directory:", files)
      } catch (dirError) {
        console.log("❌ Cannot access public directory")
      }
    }

    // Check for alternative logo files
    const alternativeLogos = ["logo.png", "logo.jpg", "logo.jpeg", "logo-optimized.png"]
    console.log("\n🔍 Checking for alternative logo files...")

    for (const altLogo of alternativeLogos) {
      try {
        const altPath = path.join(process.cwd(), "public", altLogo)
        await fs.stat(altPath)
        console.log("✅ Found alternative:", altLogo)
      } catch {
        console.log("❌ Not found:", altLogo)
      }
    }

    // Generate recommendations
    console.log("\n💡 Recommendations:")
    console.log("1. Ensure logo.svg is in the public directory")
    console.log("2. Verify SVG has proper viewBox attribute")
    console.log("3. Check file permissions")
    console.log("4. Test logo in browser developer tools")
    console.log("5. Consider using fallback text if logo fails")
  } catch (error) {
    console.error("❌ Diagnostic failed:", error.message)
  }

  console.log("\n🏁 Logo diagnostic complete")
}

// Run diagnostic
diagnoseLogo()
