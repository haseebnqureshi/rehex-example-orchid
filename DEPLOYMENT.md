# Deployment Guide - Orchid Automation Website

This guide covers multiple deployment options for the Orchid Automation website.

## ✅ Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Run `npm run dev` and test all pages locally
- [ ] Verify TypeScript compilation with `npx tsc --noEmit`
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Update metadata if needed (in `app/layout.tsx`)
- [ ] Test contact form
- [ ] Update contact email (search for "hello@orchidautomation.com")

## 1. Vercel (Recommended)

Vercel is the official Next.js hosting platform with automatic deployments.

### Setup

1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "Add New..." → "Project"
5. Import your repository
6. Vercel auto-detects Next.js settings

### Configuration

Vercel automatically configures:
- Build command: `next build`
- Output directory: `.next`
- Install command: `npm ci`

### Environment Variables

Add in Vercel Dashboard → Settings → Environment Variables:
- `NODE_ENV=production`

### Deploy

```bash
# Option 1: Via Vercel CLI
npm i -g vercel
vercel

# Option 2: Via GitHub
# Push to main branch - auto-deploys
git push origin main
```

**Result**: Website live at `yourproject.vercel.app`

---

## 2. Netlify

### Setup

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub repository
4. Configure build settings

### Build Configuration

Set these in Netlify dashboard or `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploy

```bash
# Via Netlify CLI
npm i -g netlify-cli
netlify deploy --prod
```

**Result**: Website live at `yoursite.netlify.app`

---

## 3. Docker (Self-Hosted)

### Build Image

```bash
# Build the Docker image
docker build -t orchid-automation:latest .

# Test locally
docker run -p 3000:3000 orchid-automation:latest
```

### Deploy to Docker Registry

```bash
# Tag image
docker tag orchid-automation:latest your-registry/orchid-automation:latest

# Push to registry (Docker Hub, ECR, etc.)
docker push your-registry/orchid-automation:latest
```

### Run on Server

```bash
# Pull and run
docker pull your-registry/orchid-automation:latest
docker run -d \
  -p 3000:3000 \
  -e NODE_ENV=production \
  --name orchid-automation \
  your-registry/orchid-automation:latest
```

### With Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    image: orchid-automation:latest
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

---

## 4. AWS (EC2)

### Setup EC2 Instance

```bash
# SSH into instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Update system
sudo yum update -y

# Install Node.js
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Clone repository
git clone https://github.com/your-repo.git
cd orchid-automation
```

### Deploy Application

```bash
# Install dependencies
npm install --legacy-peer-deps

# Build
npm run build

# Start (with PM2 for process management)
npm i -g pm2
pm2 start "npm start" --name "orchid-automation"
pm2 startup
pm2 save
```

### Setup Nginx Reverse Proxy

```bash
sudo yum install -y nginx

# Create nginx config
sudo tee /etc/nginx/conf.d/orchid.conf > /dev/null << EOF
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Start nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Setup SSL (Let's Encrypt)

```bash
sudo yum install -y certbot python3-certbot-nginx

sudo certbot --nginx -d your-domain.com -d www.your-domain.com

sudo systemctl restart nginx
```

---

## 5. DigitalOcean App Platform

### Setup via Dashboard

1. Go to [DigitalOcean.com](https://digitalocean.com)
2. Click "Apps" → "Create App"
3. Connect GitHub repository
4. Select project type: "Node.js"
5. Configure:
   - **Build Command**: `npm ci --legacy-peer-deps && npm run build`
   - **Run Command**: `npm start`
   - **HTTP Port**: `3000`

### Environment Variables

Add in Dashboard:
- `NODE_ENV=production`

### Deploy

Click "Deploy" - automatically deploys on GitHub push.

**Result**: Website live at `your-app-<random>.ondigitalocean.app`

---

## 6. Heroku

### Setup

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create orchid-automation

# Add buildpack
heroku buildpacks:add heroku/nodejs
```

### Procfile

Create `Procfile` in project root:

```
web: npm start
```

### Deploy

```bash
# Deploy
git push heroku main

# View logs
heroku logs --tail
```

**Result**: Website live at `orchid-automation.herokuapp.com`

---

## 7. Traditional Hosting (cPanel, Shared Hosting)

Most traditional hosts don't support Node.js. Options:

1. **Static Export** (Recommended)
   ```bash
   # Add to next.config.js
   const nextConfig = { output: 'export' }
   
   # Build
   npm run build
   
   # Upload 'out' directory via FTP to public_html
   ```

2. **VPS with Node.js**
   - Provision Node.js-enabled VPS
   - Follow "Self-Hosted" instructions above

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Check contact form works
- [ ] Test navigation and links
- [ ] Verify metadata in page source
- [ ] Check performance (Lighthouse)
- [ ] Setup SSL certificate
- [ ] Configure domain/DNS
- [ ] Setup backups (if applicable)
- [ ] Monitor uptime

## Performance Optimization

### Enable Caching

**Vercel**: Automatic
**Netlify**: Automatic
**Docker/Self-hosted**: Configure in server

### CDN Setup

```bash
# For any provider, use Cloudflare for free CDN:
1. Add your domain to Cloudflare
2. Update nameservers with registrar
3. Enable auto-minify and caching
```

### Monitor Performance

- Vercel Analytics: Built-in
- Google Analytics: Add to layout.tsx
- UptimeRobot: Monitor uptime
- Lighthouse: Regular audits

## Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf node_modules .next
npm install --legacy-peer-deps
npm run build
```

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
npm start
```

### Dependencies conflict
```bash
# Use legacy-peer-deps flag
npm install --legacy-peer-deps
```

## Support

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Deployment Issues: Check specific platform docs

---

**Last Updated**: January 2024
**Next.js Version**: 16.1.2
**Node.js Version**: 18+
