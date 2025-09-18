const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // só vai animar 1 vez
    }
  });
}, {
  threshold: 0.1,
});

// Revela as seções com classe reveal
//Ver se faz sentido visualmente
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Revelar os cards do menu individualmente
document.querySelectorAll(".menu-list > li").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});

window.onload = () => {
  window.scrollTo(0, 0);
};

const menu = [
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Margherita",
    nome: "Pizza Margherita",
    descricao: "Molho de tomate, mussarela, manjericão fresco."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Pepperoni",
    nome: "Pizza Pepperoni",
    descricao: "Molho de tomate, pepperoni, queijo mussarela."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Quatro Queijos",
    nome: "Pizza Quatro Queijos",
    descricao: "Molho de tomate, mussarela, parmesão, gorgonzola, provolone."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Calabresa",
    nome: "Pizza Calabresa",
    descricao: "Molho de tomate, calabresa, cebola, queijo mussarela."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Vegetariana",
    nome: "Pizza Vegetariana",
    descricao: "Molho de tomate, pimentões, cogumelos, azeitonas, queijo mussarela."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Frango com Catupiry",
    nome: "Pizza Frango com Catupiry",
    descricao: "Molho de tomate, frango desfiado, catupiry, milho, queijo mussarela."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Portuguesa",
    nome: "Pizza Portuguesa",
    descricao: "Molho de tomate, presunto, ovos, cebola, azeitonas, queijo mussarela."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Supreme",
    nome: "Pizza Supreme",
    descricao: "Molho de tomate, pepperoni, pimentões, cebola roxa, azeitonas, queijo mussarela."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Tropical",
    nome: "Pizza Tropical",
    descricao: "Molho de tomate, presunto, abacaxi, queijo mussarela."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Margherita Especial",
    nome: "Pizza Margherita Especial",
    descricao: "Molho de tomate, mussarela de búfala, tomate fresco, manjericão, azeite de oliva."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Carne de Sol",
    nome: "Pizza Carne de Sol",
    descricao: "Molho de tomate, carne de sol desfiada, cebola roxa, queijo mussarela."
  },
  {
    img: "pexels-engin-akyurt-2260208.jpg",
    alt: "Pizza Caprese",
    nome: "Pizza Caprese",
    descricao: "Molho de tomate, tomate fresco, mussarela de búfala, manjericão, azeite de oliva."
  }
];

const container = document.getElementById("menu");

menu.forEach(item => {
  const card = document.createElement("div");
  card.className = `
       bg-white rounded-xl shadow-md overflow-hidden 
    hover:shadow-xl hover:-translate-y-1 transition-all duration-300
    w-full max-w-sm mx-auto
  `;

  card.innerHTML = `
    <img src="${item.img}" alt="${item.alt}" 
         class="w-full h-32 object-cover rounded-t-lg">
    <div class="px-5 pt-4 pb-2">
      <h2 class="text-lg font-semibold text-gray-800">${item.nome}</h2>
      <p class="text-sm text-gray-500 mt-1">${item.descricao}</p>
    </div>
  `;

  container.appendChild(card);
});