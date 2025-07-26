# 📁 Assets - Família Quagliato

Esta pasta contém todos os recursos visuais do site institucional.

## 📂 Estrutura Recomendada

```
assets/
├── images/
│   ├── hero/
│   │   ├── hero-bg.jpg          # Imagem de fundo do hero (1920x1080)
│   │   └── hero-video.mp4       # Vídeo de fundo do hero
│   ├── empreendimentos/
│   │   ├── restaurante.jpg      # Restaurante Quagliato (800x600)
│   │   ├── bar.jpg             # Bar Quagliato (800x600)
│   │   ├── fazenda.jpg         # Fazenda Quagliato (800x600)
│   │   └── eventos.jpg         # Eventos Quagliato (800x600)
│   ├── historia/
│   │   ├── timeline-1980.jpg   # Imagem da década de 1980
│   │   ├── timeline-1995.jpg   # Imagem da década de 1995
│   │   ├── timeline-2005.jpg   # Imagem da década de 2005
│   │   ├── timeline-2015.jpg   # Imagem da década de 2015
│   │   └── timeline-2023.jpg   # Imagem da década de 2023
│   ├── mapa/
│   │   └── ourinhos-map.jpg    # Mapa de Ourinhos (1200x800)
│   └── logo/
│       ├── logo-white.png      # Logo em branco (200x80)
│       └── logo-gold.png       # Logo em dourado (200x80)
├── videos/
│   └── hero-video.mp4          # Vídeo de fundo do hero
└── icons/
    ├── instagram.svg           # Ícone do Instagram
    ├── facebook.svg            # Ícone do Facebook
    ├── linkedin.svg           # Ícone do LinkedIn
    └── whatsapp.svg           # Ícone do WhatsApp
```

## 🖼️ Especificações de Imagens

### Hero Section
- **Resolução**: 1920x1080px (mínimo)
- **Formato**: JPG ou WebP
- **Tamanho**: Máximo 2MB
- **Estilo**: Imagem dramática da fazenda ou cidade

### Empreendimentos
- **Resolução**: 800x600px
- **Formato**: JPG
- **Tamanho**: Máximo 500KB cada
- **Estilo**: Fotos profissionais dos estabelecimentos

### Linha do Tempo
- **Resolução**: 400x300px
- **Formato**: JPG
- **Tamanho**: Máximo 200KB cada
- **Estilo**: Fotos históricas da família

### Logo
- **Resolução**: 200x80px
- **Formato**: PNG com transparência
- **Tamanho**: Máximo 50KB
- **Estilo**: Logo elegante da família

## 🎥 Especificações de Vídeo

### Hero Video
- **Resolução**: 1920x1080px
- **Formato**: MP4
- **Duração**: 10-30 segundos
- **Tamanho**: Máximo 10MB
- **Conteúdo**: Drone da fazenda ou cidade

## 📱 Otimização

### Para Performance
1. **Comprima as imagens** usando ferramentas como:
   - TinyPNG (online)
   - ImageOptim (Mac)
   - FileOptimizer (Windows)

2. **Use formatos modernos**:
   - WebP para melhor compressão
   - AVIF para máxima eficiência

3. **Implemente lazy loading**:
   ```html
   <img src="placeholder.jpg" data-src="real-image.jpg" loading="lazy">
   ```

### Para SEO
1. **Adicione alt text** descritivo
2. **Use nomes de arquivo significativos**
3. **Inclua dimensões** nas tags img

## 🔧 Como Implementar

### 1. Substituir Placeholders
```html
<!-- Antes -->
<div class="image-placeholder"></div>

<!-- Depois -->
<img src="assets/images/empreendimentos/restaurante.jpg" 
     alt="Restaurante Quagliato" 
     loading="lazy">
```

### 2. Adicionar Vídeo de Fundo
```html
<!-- No hero section -->
<video autoplay muted loop class="hero-video">
    <source src="assets/videos/hero-video.mp4" type="video/mp4">
</video>
```

### 3. Atualizar Logo
```html
<!-- No navbar -->
<div class="nav-logo">
    <img src="assets/images/logo/logo-white.png" alt="Família Quagliato">
</div>
```

## 🎨 Diretrizes de Design

### Estilo Fotográfico
- **Tonalidade**: Quente e acolhedora
- **Contraste**: Alto para impacto
- **Composição**: Regra dos terços
- **Iluminação**: Natural e dramática

### Paleta de Cores
- **Dourado**: #d4af37
- **Preto**: #0a0a0a
- **Branco**: #ffffff
- **Cinza**: #b8b8b8

### Tipografia
- **Títulos**: Playfair Display
- **Corpo**: Inter
- **Hierarquia**: Clara e legível

## 📋 Checklist de Assets

- [ ] Hero background image/video
- [ ] Logo em branco e dourado
- [ ] Fotos dos 4 empreendimentos
- [ ] 5 fotos históricas para timeline
- [ ] Mapa de Ourinhos
- [ ] Ícones de redes sociais
- [ ] Favicon (32x32px)
- [ ] Open Graph image (1200x630px)

## 🚀 Próximos Passos

1. **Coletar fotos reais** da família e empreendimentos
2. **Produzir vídeo** de drone da fazenda/cidade
3. **Criar logo** profissional
4. **Otimizar todas as imagens**
5. **Testar em diferentes dispositivos**

---

**Dica**: Mantenha backups de alta resolução de todas as imagens originais! 