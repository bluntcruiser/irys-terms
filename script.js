const terms = {
  "programmable data": {
    title: "Programmable Data",
    desc: "With that data, Irys integrates cost-effective data storage and smart-contract functionality, enabling dApps and services to interact programmatically with large amounts of onchain data within a single protocol and ecosystem."
  },
  "verifiability": {
    title: "Verifiability",
    desc: "The ability to check the authenticity and integrity of data. In Irys, anyone can verify that data hasn't been changed and really belongs to the claimed source."
  },
  "IrysVM": {
    title: "IrysVM",
    desc: "The Irys Virtual Machine — a computational environment for executing smart contracts and programmable operations with data in the Irys network."
  },
  "Multi-Ledger Architecture": {
    title: "Multi-Ledger Architecture",
    desc: "A system with multiple ledgers to optimize data storage and transition."
  },
  "Submit Ledger": {
    title: "Submit Ledger",
    desc: "The temporary holding space for data validation."
  },
  "Publish Ledger": {
    title: "Publish Ledger",
    desc: "The permanent storage space for verified data."
  },
  "deshi": {
    title: "Deshi",
    desc: "Apprentices taking their first steps. They engage, contribute, and add their voices to the discourse. Iryna watches, measuring not status, but action and intent."
  },
  "shugo": {
    title: "Shugo",
    desc: "Practitioners who understand the foundations of irysology, strengthening it through deeper contributions."
  },
  "senshi": {
    title: "Senshi",
    desc: "The warriors, protectors of the lore who challenge and refine the community."
  },
  "shihan": {
    title: "Shihan",
    desc: "Masters who pass down wisdom, guiding those who follow and shaping the very foundation of Irys. Shihan’s stand as Iryna’s closest confidants, and protectors of her heart."
  },
  "Hirys": {
    title: "Hirys",
    desc: "A friendly greeting. Think of it as your blockchain \"hello.\""
  },
  "Iryspect": {
    title: "Iryspect",
    desc: "When you show respect—because we keep it classy in Irys."
  },
  "Irysonate": {
    title: "Irysonate",
    desc: "Feeling that deep connection with the Irys vision."
  },
  "Irysexy": {
    title: "Irysexy",
    desc: "Just trust, no caption needed; it speaks for itself."
  },
  "Iryna": {
    title: "Iryna",
    desc: ""
  },
  "Node": {
    title: "Node",
    desc: "A participant in the Irys network that validates, stores, and relays data."
  },
  "Uploader": {
    title: "Uploader",
    desc: "A client or user who uploads data to the Irys network."
  },
  "Bundlr": {
    title: "Bundlr",
    desc: "A protocol and implementation for scalable data uploads to Arweave and other storage networks."
  },
  "Gateway": {
    title: "Gateway",
    desc: "A service that provides access to data stored on Irys, often with additional features like search or analytics."
  },
  "Receipt": {
    title: "Receipt",
    desc: "A cryptographic proof that data was uploaded and stored on the network."
  },
  "Tag": {
    title: "Tag",
    desc: "A key-value pair attached to data for metadata, search, or filtering."
  },
  "Chunking": {
    title: "Chunking",
    desc: "The process of splitting large data into smaller pieces for efficient upload and storage."
  },
  "Funding": {
    title: "Funding",
    desc: "The process of adding tokens to your Irys balance to pay for uploads."
  },
  "Manifest": {
    title: "Manifest",
    desc: "A special file that maps paths to data items, enabling folder-like structures."
  },
  "Sprite": {
    title: "Sprite",
    desc: "Cute mascot of Irys."
  },
  "Transaction": {
    title: "Transaction",
    desc: "A record of data upload, payment, or other action on the Irys network."
  },
  "Anchor": {
    title: "Anchor",
    desc: "A mechanism to link data uploads to a specific blockchain for verifiability."
  },
  "Balance": {
    title: "Balance",
    desc: "The amount of tokens available in your Irys account for uploads."
  },
  "Withdrawal": {
    title: "Withdrawal",
    desc: "The process of moving tokens out of your Irys account."
  },
  "CLI": {
    title: "CLI",
    desc: "Command Line Interface for interacting with Irys from your terminal."
  },
  "SDK": {
    title: "SDK",
    desc: "Software Development Kit for integrating Irys into your applications."
  },
  "Fee": {
    title: "Fee",
    desc: "The cost paid in tokens for uploading data to Irys."
  },
  "Signature": {
    title: "Signature",
    desc: "A cryptographic proof of authenticity for data or transactions."
  }
};

document.querySelectorAll('.node.oval').forEach(node => {
  const term = node.getAttribute('data-term');
  if (term && terms[term]) {
    node.childNodes.forEach(child => {
      if (child.nodeType === 3) node.removeChild(child);
    });
    node.insertAdjacentText('afterbegin', terms[term].title);
  }
});


const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.node.oval').forEach(node => {
  node.addEventListener('click', () => {
    const term = node.getAttribute('data-term');
    if (term && terms[term]) {
      modalTitle.textContent = terms[term].title;
      modalDesc.textContent = terms[term].desc || "Описание скоро появится.";
      modal.style.display = 'flex';
    }
  });
});


closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});


const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let bubbles = [];
let particles = [];
let lines = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createBubble() {
  const colors = [
    'rgba(81,254,214,0.13)',
    'rgba(30,214,184,0.10)',
    'rgba(81,180,254,0.10)',
    'rgba(255,255,255,0.08)'
  ];
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20 + Math.random() * 100,
    r: 16 + Math.random() * 32,
    speed: 0.3 + Math.random() * 1.1,
    alpha: 0.08 + Math.random() * 0.08,
    color: colors[Math.floor(Math.random() * colors.length)]
  };
}

function createParticle() {

  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: 1 + Math.random() * 2,
    dx: -0.2 + Math.random() * 0.4,
    dy: -0.2 + Math.random() * 0.4,
    alpha: 0.12 + Math.random() * 0.12
  };
}

function createLine() {
  const vertical = Math.random() > 0.5;
  return {
    x: vertical ? Math.random() * canvas.width : 0,
    y: vertical ? 0 : Math.random() * canvas.height,
    length: 180 + Math.random() * 220,
    speed: 0.2 + Math.random() * 0.3,
    vertical,
    alpha: 0.10 + Math.random() * 0.10,
    color: Math.random() > 0.5 ? '#51FED6' : '#1ed6b8'
  };
}

function drawBubblesAndLines() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  for (let l of lines) {
    ctx.save();
    ctx.globalAlpha = l.alpha;
    ctx.strokeStyle = l.color;
    ctx.shadowColor = l.color;
    ctx.shadowBlur = 18;
    ctx.lineWidth = 3 + Math.random() * 2;
    ctx.beginPath();
    if (l.vertical) {
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x, l.y + l.length);
      l.y += l.speed;
      if (l.y > canvas.height) {
        l.y = -l.length;
        l.x = Math.random() * canvas.width;
      }
    } else {
      ctx.moveTo(l.x, l.y);
      ctx.lineTo(l.x + l.length, l.y);
      l.x += l.speed;
      if (l.x > canvas.width) {
        l.x = -l.length;
        l.y = Math.random() * canvas.height;
      }
    }
    ctx.stroke();
    ctx.restore();
  }

  
  for (let b of bubbles) {
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
    ctx.fillStyle = b.color;
    ctx.fill();
    b.y -= b.speed;
    if (b.y + b.r < 0) {
      Object.assign(b, createBubble());
      b.y = canvas.height + b.r;
    }
  }

  
  for (let p of particles) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(81,254,214,${p.alpha})`;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
}

function animate() {
  drawBubblesAndLines();
  requestAnimationFrame(animate);
}


bubbles = Array.from({length: 22}, createBubble);
lines = Array.from({length: 7}, createLine);
particles = Array.from({length: 60}, createParticle);
animate();


const branches = document.querySelectorAll('.branch');
const observer = new window.IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

branches.forEach(branch => observer.observe(branch));


const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});


const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('irys-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('irys-theme') === 'dark') {
  document.body.classList.add('dark');
}
