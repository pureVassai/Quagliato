// Configurações do Site Institucional Família Quagliato
// Personalize estas configurações conforme necessário

const SITE_CONFIG = {
    // Informações da Família
    family: {
        name: "Família Quagliato",
        tagline: "Tradição que alimenta, conecta e transforma Ourinhos",
        description: "Uma das famílias mais influentes de Ourinhos - SP, referência em agricultura de alta escala e empreendimentos gastronômicos premium.",
        city: "Ourinhos",
        state: "SP",
        country: "Brasil"
    },

    // Cores do Site (pode ser personalizado)
    colors: {
        primary: "#d4af37",        // Dourado
        primaryLight: "#f4d03f",   // Dourado claro
        accent: "#c0392b",         // Vermelho vinho
        background: "#0a0a0a",     // Preto profundo
        backgroundLight: "#1a1a1a", // Cinza escuro
        text: "#ffffff",           // Branco
        textSecondary: "#b8b8b8"  // Cinza claro
    },

    // Empreendimentos da Família
    businesses: [
        {
            id: "restaurante",
            name: "Restaurante Quagliato",
            description: "Gastronomia italiana de alta qualidade, com ingredientes frescos da própria fazenda da família.",
            type: "Restaurante",
            location: "Centro de Ourinhos",
            features: ["Gourmet", "Italiano", "Premium"],
            image: "assets/images/empreendimentos/restaurante.jpg"
        },
        {
            id: "bar",
            name: "Bar Quagliato",
            description: "Bar premium com ambiente sofisticado, coquetéis artesanais e música ao vivo.",
            type: "Bar",
            location: "Zona Norte",
            features: ["Coquetéis", "Música", "Premium"],
            image: "assets/images/empreendimentos/bar.jpg"
        },
        {
            id: "fazenda",
            name: "Fazenda Quagliato",
            description: "Produção agrícola de alta escala, fornecendo ingredientes frescos para todos os empreendimentos.",
            type: "Agricultura",
            location: "Zona Rural",
            features: ["Agricultura", "Orgânico", "Sustentável"],
            image: "assets/images/empreendimentos/fazenda.jpg"
        },
        {
            id: "eventos",
            name: "Eventos Quagliato",
            description: "Espaço para eventos corporativos e celebrações especiais com serviço de catering premium.",
            type: "Eventos",
            location: "Centro de Ourinhos",
            features: ["Eventos", "Catering", "Exclusivo"],
            image: "assets/images/empreendimentos/eventos.jpg"
        }
    ],

    // Linha do Tempo Real
    timeline: [
        {
            year: "1950",
            title: "Fundação da Usina São Luiz",
            description: "Início do legado industrial da família em Ourinhos"
        },
        {
            year: "1980",
            title: "Início das atividades agrícolas",
            description: "Expansão para o setor agrícola com técnicas inovadoras"
        },
        {
            year: "1995",
            title: "Agricultura de alta escala",
            description: "Revolução no setor agrícola regional"
        },
        {
            year: "2005",
            title: "Primeiro restaurante gourmet",
            description: "Entrada no setor gastronômico premium"
        },
        {
            year: "2015",
            title: "Rede de empreendimentos gastronômicos",
            description: "Consolidação da rede de negócios"
        },
        {
            year: "2023",
            title: "Líder em estilo de vida sofisticado",
            description: "Referência em excelência e sofisticação"
        }
    ],

    // Estatísticas Reais
    stats: {
        empreendimentos: 4,
        clientesSatisfeitos: 1000,
        anosTradicao: 70
    },

    // Informações de Contato
    contact: {
        email: "contato@famíliaquagliato.com.br",
        phone: "+55 (14) 3333-4444",
        address: "Ourinhos - SP, Brasil",
        hours: {
            weekdays: "Segunda a Sexta: 9h às 18h",
            saturday: "Sábado: 9h às 14h",
            sunday: "Domingo: Fechado"
        }
    },

    // Redes Sociais
    social: {
        instagram: "@familiaquagliato",
        facebook: "Família Quagliato",
        linkedin: "Família Quagliato",
        whatsapp: "+55 (14) 99999-9999"
    },

    // Configurações de Animações
    animations: {
        loadingDuration: 3000,        // Duração do loading em ms
        scrollSpeed: 1.5,             // Velocidade do scroll suave
        hoverScale: 1.02,             // Escala no hover
        transitionDuration: 0.6       // Duração das transições
    },

    // Configurações de Performance
    performance: {
        lazyLoading: true,            // Carregamento lazy de imagens
        preloadCritical: true,        // Pré-carregar recursos críticos
        compressImages: true,         // Comprimir imagens
        cacheStrategy: "aggressive"   // Estratégia de cache
    },

    // SEO
    seo: {
        title: "Família Quagliato - Tradição que Alimenta, Conecta e Transforma Ourinhos",
        description: "A Família Quagliato, uma das mais influentes de Ourinhos - SP, referência em agricultura de alta escala e empreendimentos gastronômicos premium.",
        keywords: "Família Quagliato, Ourinhos, agricultura, gastronomia, restaurante, bar, fazenda, eventos",
        author: "Família Quagliato",
        ogImage: "assets/images/og-image.jpg"
    }
};

// Função para aplicar configurações
function applyConfig() {
    // Aplicar cores
    const root = document.documentElement;
    Object.entries(SITE_CONFIG.colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`, value);
    });

    // Aplicar informações da família
    document.title = SITE_CONFIG.seo.title;
    document.querySelector('meta[name="description"]').setAttribute('content', SITE_CONFIG.seo.description);
    
    // Atualizar hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = SITE_CONFIG.family.tagline.split(' ').map(word => 
            `<span class="title-line">${word}</span>`
        ).join(' ');
    }

    // Atualizar estatísticas
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length >= 3) {
        stats[0].textContent = SITE_CONFIG.stats.empreendimentos;
        stats[1].textContent = SITE_CONFIG.stats.clientesSatisfeitos + '+';
        stats[2].textContent = SITE_CONFIG.stats.anosTradicao + '+';
    }

    // Atualizar informações de contato
    const contactInfo = document.querySelectorAll('.info-item p');
    if (contactInfo.length >= 6) {
        contactInfo[0].textContent = SITE_CONFIG.contact.email;
        contactInfo[1].textContent = SITE_CONFIG.contact.phone;
        contactInfo[2].textContent = SITE_CONFIG.contact.hours.weekdays;
        contactInfo[3].textContent = SITE_CONFIG.contact.hours.saturday;
        contactInfo[4].textContent = SITE_CONFIG.contact.address;
        contactInfo[5].textContent = SITE_CONFIG.family.city + ' - ' + SITE_CONFIG.family.state;
    }
}

// Exportar configurações
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
} else {
    window.SITE_CONFIG = SITE_CONFIG;
    window.applyConfig = applyConfig;
}

// Aplicar configurações quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
} else {
    applyConfig();
} 