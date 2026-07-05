# PRISMA Design System — Storybook Development
FROM node:22-alpine

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
EXPOSE 6006
CMD ["npx", "storybook", "dev", "-p", "6006", "--host", "0.0.0.0"]
