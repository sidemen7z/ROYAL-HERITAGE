# 🎥 Video Optimization Guide

## Current Status

Your videos are already optimized for web with:
- ✅ `preload="metadata"` - Loads only video info, not full video
- ✅ Hardware acceleration enabled
- ✅ Lazy loading for reel videos
- ✅ Caching headers configured

## Why Videos Might Load Slowly

1. **Large file sizes** - Original videos may be 20-100 MB
2. **High bitrate** - 4K or high-quality videos
3. **Server location** - Vercel CDN will help with this

## How to Compress Videos (Recommended)

### Option 1: Online Tools (Easiest)

**CloudConvert** (Free, No Installation)
1. Go to: https://cloudconvert.com/mp4-converter
2. Upload your video
3. Settings:
   - Format: MP4
   - Video Codec: H.264
   - Quality: Medium (or 70%)
   - Resolution: 1920x1080 (1080p)
4. Download compressed video

**Other Tools:**
- https://www.freeconvert.com/video-compressor
- https://www.videosmaller.com/
- https://www.ps2pdf.com/compress-mp4

### Option 2: HandBrake (Free Desktop App)

1. Download: https://handbrake.fr/
2. Open your video
3. Preset: "Fast 1080p30"
4. Quality: RF 28 (lower = better quality, larger file)
5. Click "Start Encode"

### Option 3: FFmpeg (Command Line)

**Install FFmpeg:**
- Windows: Download from https://ffmpeg.org/download.html
- Or use: `winget install ffmpeg`

**Compress Commands:**

```bash
# Hero video (landscape)
ffmpeg -i "this will be for hero section video.mp4" -c:v libx264 -crf 28 -preset slow -vf "scale=1920:1080" -c:a aac -b:a 128k hero-compressed.mp4

# Reel 1 (vertical)
ffmpeg -i reel1.mp4 -c:v libx264 -crf 28 -preset slow -vf "scale=1080:1920" -c:a aac -b:a 128k reel1-compressed.mp4

# Reel 2 (vertical)
ffmpeg -i reel2.mp4 -c:v libx264 -crf 28 -preset slow -vf "scale=1080:1920" -c:a aac -b:a 128k reel2-compressed.mp4
```

**Parameters Explained:**
- `-crf 28` = Quality (18-28 is good, lower = better)
- `-preset slow` = Better compression
- `-b:a 128k` = Audio bitrate
- `scale=1920:1080` = Resolution

## Target File Sizes

For fast web loading:
- **Hero video**: 3-8 MB (landscape, 10-30 seconds)
- **Reel videos**: 2-5 MB each (vertical, 10-20 seconds)

## After Compression

1. Replace files in `public` folder:
   - Replace "this will be for hero section video.mp4"
   - Replace reel1.mp4
   - Replace reel2.mp4

2. Test locally:
   ```bash
   npm run dev
   ```

3. Push to GitHub:
   ```bash
   git add .
   git commit -m "Optimized videos for faster loading"
   git push
   ```

4. Vercel will auto-deploy the update

## Alternative: Use Video CDN (Advanced)

Upload videos to:
- **Cloudinary** (Free tier: 25 GB)
- **Bunny.net** (Paid, very fast)
- **AWS S3 + CloudFront**

Then update video URLs in `src/App.jsx`

## Check Your Results

After optimization, test speed:
1. https://pagespeed.web.dev/
2. Enter your Vercel URL
3. Check "Largest Contentful Paint" score

Target: Under 2.5 seconds

## Need Help?

Contact: +91 98509 93992

---

**Pro Tip:** Vercel's CDN automatically caches videos worldwide, so even without compression, loading will be faster than local testing!
