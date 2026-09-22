// Data for OSI Layers
const osiLayers = {
    7: {
        name: 'Aplicação',
        nameEnglish: 'Application',
        color: '#E53935',
        protocols: ['HTTP/HTTPS', 'FTP', 'SMTP', 'DNS', 'Telnet', 'SSH', 'POP3', 'IMAP', 'SNMP'],
        functions: ['Interface com o usuário', 'Serviços de rede para aplicações', 'Autenticação de usuários'],
        pdu: 'Dados',
        devices: ['Navegadores (Chrome, Firefox)', 'Clientes de email', 'Servidores web'],
        example: 'Um usuário abrindo um navegador para acessar um site'
    },
    6: {
        name: 'Apresentação',
        nameEnglish: 'Presentation',
        color: '#FB8C00',
        protocols: ['JPEG', 'MPEG', 'SSL/TLS', 'GIF', 'ASCII'],
        functions: ['Tradução de dados', 'Criptografia', 'Compressão de dados', 'Conversão de formatos'],
        pdu: 'Dados',
        devices: ['Codificadores', 'Decodificadores'],
        example: 'Criptografia SSL/TLS de um banco online'
    },
    5: {
        name: 'Sessão',
        nameEnglish: 'Session',
        color: '#FFB300',
        protocols: ['NetBIOS', 'PPTP', 'SCP'],
        functions: ['Estabelecimento de sessão', 'Encerramento de sessão', 'Sincronização', 'Controle de diálogo'],
        pdu: 'Dados',
        devices: [],
        example: 'Gerenciamento de uma conexão VPN'
    },
    4: {
        name: 'Transporte',
        nameEnglish: 'Transport',
        color: '#7CB342',
        protocols: ['TCP', 'UDP', 'SCTP'],
        functions: ['Confiabilidade de entrega', 'Controle de fluxo', 'Segmentação de dados', 'Multiplexação'],
        pdu: 'Segmento (TCP) / Datagrama (UDP)',
        keyInfo: 'Aqui operam os números de porta (0-65535)',
        devices: [],
        example: 'TCP garante entrega em ordem, UDP é mais rápido'
    },
    3: {
        name: 'Rede',
        nameEnglish: 'Network',
        color: '#00ACC1',
        protocols: ['IP (IPv4, IPv6)', 'ICMP', 'IGMP', 'ARP'],
        functions: ['Roteamento de pacotes', 'Endereçamento lógico', 'Controle de congestionamento', 'Fragmentação de pacotes'],
        pdu: 'Pacote',
        devices: ['Roteadores', 'Switches de camada 3'],
        example: 'Um roteador encaminhando pacotes entre duas redes diferentes'
    },
    2: {
        name: 'Enlace',
        nameEnglish: 'Data Link',
        color: '#1E88E5',
        protocols: ['Ethernet', 'PPP', 'Frame Relay', 'MAC', 'WiFi'],
        functions: ['Transmissão confiável entre nós', 'Endereçamento físico (MAC)', 'Detecção de erros', 'Controle de acesso ao meio'],
        pdu: 'Quadro (Frame)',
        devices: ['Switches de camada 2', 'Pontes', 'Adaptadores de rede'],
        example: 'Ethernet conectando computadores em uma rede local'
    },
    1: {
        name: 'Física',
        nameEnglish: 'Physical',
        color: '#6A1B9A',
        protocols: ['Ethernet (cabeamento)', 'WiFi', 'Bluetooth', 'RS-232', 'DSL'],
        functions: ['Transmissão de bits', 'Definição de voltagem', 'Definição de conectores', 'Meio de transmissão'],
        pdu: 'Bit',
        devices: ['Cabos de rede', 'Modem', 'Placas de rede', 'Hubs', 'Repetidores'],
        example: 'Sinais elétricos viajando através de cabos de rede'
    }
};

// Data for TCP/IP Layers
const tcpipLayers = {
    4: {
        name: 'Aplicação',
        nameEnglish: 'Application',
        color: '#E53935',
        osiEquivalence: 'OSI Camadas 7, 6 e 5',
        protocols: ['HTTP/HTTPS', 'FTP', 'SMTP', 'DNS', 'Telnet', 'SSH', 'POP3', 'IMAP', 'SNMP'],
        functions: ['Serviços para usuários', 'Tradução de dados', 'Compressão', 'Criptografia', 'Gerenciamento de sessão'],
        example: 'Navegador acessando um site, cliente de email enviando mensagens'
    },
    3: {
        name: 'Transporte',
        nameEnglish: 'Transport',
        color: '#7CB342',
        osiEquivalence: 'OSI Camada 4',
        protocols: ['TCP', 'UDP', 'SCTP'],
        functions: ['Confiabilidade', 'Controle de fluxo', 'Segmentação', 'Números de porta'],
        example: 'TCP para transferência de arquivos confiável, UDP para streaming'
    },
    2: {
        name: 'Internet',
        nameEnglish: 'Internet',
        color: '#00ACC1',
        osiEquivalence: 'OSI Camada 3',
        protocols: ['IP (IPv4, IPv6)', 'ICMP', 'IGMP', 'ARP'],
        functions: ['Roteamento', 'Endereçamento lógico', 'Controle de congestionamento'],
        example: 'Roteadores conectando diferentes redes usando IP'
    },
    1: {
        name: 'Acesso à Rede',
        nameEnglish: 'Link / Network Access',
        color: '#6A1B9A',
        osiEquivalence: 'OSI Camadas 2 e 1',
        protocols: ['Ethernet', 'WiFi', 'PPP', 'MAC'],
        functions: ['Transmissão física', 'Endereçamento físico', 'Controle de meio', 'Detecção de erros'],
        example: 'Cabos e switches conectando dispositivos na rede local'
    }
};

// Encapsulation steps
const encapsulationSteps = [
    {
        step: 1,
        layerOsi: 7,
        layerTcpIp: 4,
        name: 'Aplicação',
        color: '#E53935',
        description: 'Usuário envia email',
        data: 'Mensagem: "Olá mundo"',
        action: 'Aplicação adiciona informações de protocolo (HTTP, SMTP headers)',
        pdu: 'Dados'
    },
    {
        step: 2,
        layerOsi: 6,
        layerTcpIp: 4,
        name: 'Apresentação',
        color: '#FB8C00',
        description: 'Criptografia e compressão',
        action: 'Dados são criptografados (SSL/TLS) ou comprimidos se necessário',
        pdu: 'Dados'
    },
    {
        step: 3,
        layerOsi: 5,
        layerTcpIp: 4,
        name: 'Sessão',
        color: '#FFB300',
        description: 'Gerenciamento de sessão',
        action: 'Sessão é estabelecida e sincronizada',
        pdu: 'Dados'
    },
    {
        step: 4,
        layerOsi: 4,
        layerTcpIp: 3,
        name: 'Transporte',
        color: '#7CB342',
        description: 'Segmentação e números de porta',
        action: 'Dados são divididos em segmentos, TCP/UDP header adicionado',
        ports: 'Porta origem: 2345, Porta destino: 25 (SMTP)',
        pdu: 'Segmento ou Datagrama'
    },
    {
        step: 5,
        layerOsi: 3,
        layerTcpIp: 2,
        name: 'Rede',
        color: '#00ACC1',
        description: 'Roteamento e endereçamento IP',
        action: 'Header IP adicionado com endereços lógicos',
        addresses: 'IP origem: 192.168.1.100, IP destino: 8.8.8.8',
        pdu: 'Pacote'
    },
    {
        step: 6,
        layerOsi: 2,
        layerTcpIp: 1,
        name: 'Enlace',
        color: '#1E88E5',
        description: 'Transmissão entre nós adjacentes',
        action: 'Header MAC adicionado com endereços físicos',
        addresses: 'MAC origem: AA:BB:CC:DD:EE:FF, MAC destino: 11:22:33:44:55:66',
        pdu: 'Quadro'
    },
    {
        step: 7,
        layerOsi: 1,
        layerTcpIp: 1,
        name: 'Física',
        color: '#6A1B9A',
        description: 'Transmissão de bits',
        action: 'Dados convertidos para sinais (bits 1s e 0s) e transmitidos',
        pdu: 'Bit'
    }
];

// Tab Navigation
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Function to render OSI layer details
function renderOSILayer(layerNum) {
    const layer = osiLayers[layerNum];
    const container = document.getElementById('osiLayerDetails');
    
    let devicesHTML = '';
    if (layer.devices && layer.devices.length > 0) {
        devicesHTML = `
            <div class="detail-section">
                <h4>📱 Dispositivos Associados:</h4>
                <ul class="function-list">
                    ${layer.devices.map(device => `<li>${device}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    let keyInfoHTML = '';
    if (layer.keyInfo) {
        keyInfoHTML = `
            <div class="info-box" style="background: #FFF3E0; border-left-color: #FB8C00;">
                <strong>ℹ️ Informação Importante:</strong> ${layer.keyInfo}
            </div>
        `;
    }
    
    container.innerHTML = `
        <div class="layer-detail">
            <h3 style="border-color: ${layer.color}; color: ${layer.color};">
                Camada ${layerNum} - ${layer.name} (${layer.nameEnglish})
            </h3>
            
            ${keyInfoHTML}
            
            <div class="detail-section">
                <h4>🔧 Protocolos Principais:</h4>
                <div class="protocol-list">
                    ${layer.protocols.map(protocol => `<span class="protocol-tag">${protocol}</span>`).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h4>⚙️ Funções:</h4>
                <ul class="function-list">
                    ${layer.functions.map(func => `<li>${func}</li>`).join('')}
                </ul>
            </div>
            
            <div class="pdu-box">
                <strong>📦 PDU (Protocol Data Unit):</strong> ${layer.pdu}
            </div>
            
            ${devicesHTML}
            
            <div class="example-box">
                <strong>💡 Exemplo Prático:</strong> ${layer.example}
            </div>
        </div>
    `;
}

// Function to render TCP/IP layer details
function renderTCPIPLayer(layerNum) {
    const layer = tcpipLayers[layerNum];
    const container = document.getElementById('tcpipLayerDetails');
    
    container.innerHTML = `
        <div class="layer-detail">
            <h3 style="border-color: ${layer.color}; color: ${layer.color};">
                Camada ${layerNum} - ${layer.name} (${layer.nameEnglish})
            </h3>
            
            <div class="info-box" style="background: #E8F5E9; border-left-color: #4CAF50;">
                <strong>🔗 Equivalência OSI:</strong> ${layer.osiEquivalence}
            </div>
            
            <div class="detail-section">
                <h4>🔧 Protocolos Principais:</h4>
                <div class="protocol-list">
                    ${layer.protocols.map(protocol => `<span class="protocol-tag">${protocol}</span>`).join('')}
                </div>
            </div>
            
            <div class="detail-section">
                <h4>⚙️ Funções:</h4>
                <ul class="function-list">
                    ${layer.functions.map(func => `<li>${func}</li>`).join('')}
                </ul>
            </div>
            
            <div class="example-box">
                <strong>💡 Exemplo Prático:</strong> ${layer.example}
            </div>
        </div>
    `;
}

// OSI Layer Navigation
const osiLayerBtns = document.querySelectorAll('#osiLayerNav .layer-nav-btn');
osiLayerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const layerNum = btn.dataset.layer;
        osiLayerBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderOSILayer(parseInt(layerNum));
    });
});

// TCP/IP Layer Navigation
const tcpipLayerBtns = document.querySelectorAll('#tcpipLayerNav .layer-nav-btn');
tcpipLayerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const layerNum = btn.dataset.layer;
        tcpipLayerBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderTCPIPLayer(parseInt(layerNum));
    });
});

// Initialize OSI and TCP/IP layer details
renderOSILayer(7);
renderTCPIPLayer(4);

// Encapsulation Animation
let currentEncapStep = 1;
const totalEncapSteps = encapsulationSteps.length;
const encapContainer = document.getElementById('encapsulationSteps');
const prevEncapBtn = document.getElementById('prevEncapBtn');
const nextEncapBtn = document.getElementById('nextEncapBtn');
const restartEncapBtn = document.getElementById('restartEncapBtn');
const encapCounter = document.getElementById('encapCounter');

function renderEncapsulationSteps() {
    encapContainer.innerHTML = encapsulationSteps.map((step, index) => {
        let additionalInfo = '';
        if (step.ports) {
            additionalInfo += `<div class="pdu-box"><strong>🔌 Portas:</strong> ${step.ports}</div>`;
        }
        if (step.addresses) {
            additionalInfo += `<div class="pdu-box"><strong>📍 Endereços:</strong> ${step.addresses}</div>`;
        }
        
        // Build encapsulation visual
        let encapVisual = '<div class="encapsulation-visual">';
        for (let i = 0; i <= index; i++) {
            const s = encapsulationSteps[i];
            encapVisual += `
                <div class="encap-layer" style="background: ${s.color}; color: white; margin-left: ${i * 20}px;">
                    <span class="encap-header">Header ${s.name}</span>
                    ${i === index ? '<span>Dados</span>' : ''}
                </div>
            `;
        }
        encapVisual += '</div>';
        
        return `
            <div class="encapsulation-step ${index === 0 ? 'active' : ''}" data-step="${step.step}">
                <div class="step-header" style="background: ${step.color};">
                    <h3>Passo ${step.step}: ${step.name} (OSI Camada ${step.layerOsi})</h3>
                    <p>${step.description}</p>
                </div>
                
                <div class="data-flow">
                    <div class="device-icon">💻</div>
                    <div class="data-packet">
                        <h4 style="color: ${step.color}; margin-bottom: 15px;">${step.action}</h4>
                        ${step.data ? `<p><strong>📝 Dados:</strong> ${step.data}</p>` : ''}
                        <div class="pdu-box">
                            <strong>📦 PDU:</strong> ${step.pdu}
                        </div>
                        ${additionalInfo}
                    </div>
                    <div class="device-icon" style="background: #4CAF50;">🖥️</div>
                </div>
                
                ${encapVisual}
                
                <div class="info-box">
                    <h4>O que acontece nesta camada:</h4>
                    <p>${step.action}</p>
                </div>
            </div>
        `;
    }).join('');
}

function updateEncapStep() {
    const steps = document.querySelectorAll('.encapsulation-step');
    steps.forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.dataset.step) === currentEncapStep) {
            step.classList.add('active');
        }
    });
    
    encapCounter.textContent = `Passo ${currentEncapStep} de ${totalEncapSteps}`;
    prevEncapBtn.disabled = currentEncapStep === 1;
    nextEncapBtn.disabled = currentEncapStep === totalEncapSteps;
}

nextEncapBtn.addEventListener('click', () => {
    if (currentEncapStep < totalEncapSteps) {
        currentEncapStep++;
        updateEncapStep();
    }
});

prevEncapBtn.addEventListener('click', () => {
    if (currentEncapStep > 1) {
        currentEncapStep--;
        updateEncapStep();
    }
});

restartEncapBtn.addEventListener('click', () => {
    currentEncapStep = 1;
    updateEncapStep();
});

renderEncapsulationSteps();

// Glossary Modal
const glossaryBtn = document.getElementById('glossaryBtn');
const glossaryModal = document.getElementById('glossaryModal');
const modalClose = document.getElementById('modalClose');

glossaryBtn.addEventListener('click', () => {
    glossaryModal.classList.add('active');
});

modalClose.addEventListener('click', () => {
    glossaryModal.classList.remove('active');
});

glossaryModal.addEventListener('click', (e) => {
    if (e.target === glossaryModal) {
        glossaryModal.classList.remove('active');
    }
});