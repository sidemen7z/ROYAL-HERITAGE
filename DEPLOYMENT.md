# Deployment Guide for Royal Heritage

## Step 1: Initialize Git Repository

Open terminal in the `royal-heritage` folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Royal Heritage luxury real estate website"
```

## Step 2: Connect to GitHub Repository

```bash
git remote add origin https://github.com/sidemen7z/ROYAL-HERITAGE.git
git branch -M main
git push -u origin main
```

If you get an error about the repository already existing, use:

```bash
git push -f origin main
```

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your repository: `sidemen7z/ROYAL-HERITAGE`
5. Configure project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### Option B: Using Vercel CLI

```bash
npm install -g vercel
cd royal-heritage
vercel login
vercel --prod
```

## Step 4: Video Optimization Tips

For faster video loading on production:

1. **Compress Videos** (Recommended):
   - Use HandBrake or FFmpeg to compress videos
   - Target bitrate: 2-4 Mbps for web
   - Resolution: 1080p max
   
   FFmpeg command:
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4
   ```

2. **Use CDN** (Optional):
   - Upload videos to Cloudinary, AWS S3, or similar
   - Update video src URLs in App.jsx

3. **Lazy Loading** (Already implemented):
   - Videos use `preload="metadata"` for faster initial load
   - Reel videos only load when scrolled into view

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Environment Variables

No environment variables needed for this project.

## Post-Deployment Checklist

- [ ] Test all videos load correctly
- [ ] Test WhatsApp links work
- [ ] Test phone call links work
- [ ] Test Google Maps link works
- [ ] Test on mobile devices
- [ ] Test form submission
- [ ] Check page load speed on [PageSpeed Insights](https://pagespeed.web.dev/)

## Troubleshooting

### Videos not loading:
- Ensure video files are in the `public` folder
- Check video file names match exactly (case-sensitive)
- Verify videos are in MP4 format

### Build fails:
- Run `npm install` to ensure all dependencies are installed
- Check for any console errors
- Ensure Node.js version is 16 or higher

### Slow loading:
- Compress video files (see Step 4)
- Enable Vercel's automatic image optimization
- Consider using a CDN for large media files

## Support

For issues, contact:
- Phone: +91 98509 93992
- WhatsApp: +91 98509 93992

---

Built with ❤️ for Aalay Developers
