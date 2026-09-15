// ==========================================================
// 1. HEADER HTML TEMPLATE (LUXURY DESIGN)
// ==========================================================
const headerHTML = `
    <!-- Top Welcome Banner -->
    <div id="welcome-banner" class="w-full bg-[#64150c] text-white py-2 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase border-b border-[#8b1e0f] relative z-50 overflow-hidden transition-all duration-300">
        <div class="whitespace-nowrap w-full">
            <style>
                @keyframes slideText { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
                .animate-slide-text { display: inline-block; padding-left: 100%; animation: slideText 20s linear infinite; }
                .animate-slide-text:hover { animation-play-state: paused; }
                
                /* Premium Shine Effect for Logo */
                .shine-text {
                    background: linear-gradient(to right, #8b1e0f 20%, #d4af37 40%, #d4af37 60%, #8b1e0f 80%);
                    background-size: 200% auto; color: transparent; -webkit-background-clip: text; background-clip: text;
                    animation: shine 4s linear infinite;
                }
                @keyframes shine { to { background-position: 200% center; } }
            </style>
            <span class="animate-slide-text">
                Welcome to Chulha Ghar, Deoghar <span class="text-gold mx-3">•</span> 
                Premium Kitchen Essentials <span class="text-gold mx-3">•</span> 
                Free Delivery on orders above ₹999
            </span>
        </div>
    </div>

    <!-- Main Header (Glassmorphism & Sticky) -->
    <header class="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-[100] shadow-sm transition-all duration-300">
        <div class="container mx-auto px-4 lg:px-8 flex h-[72px] md:h-20 items-center justify-between">
            
            <!-- Left Side: Hamburger (Mobile) + Logo -->
            <div class="flex items-center gap-3 lg:gap-5 flex-shrink-0">
                <button id="menu-btn" class="lg:hidden text-gray-700 hover:text-primary transition-colors p-2 active:scale-95 bg-gray-50 rounded-full h-10 w-10 flex items-center justify-center">
                    <i class="fa-solid fa-bars text-xl"></i>
                </button>
                
                <a href="index.html" class="flex items-center gap-2 lg:gap-3 group relative z-20">
                    <div class="h-10 w-10 md:h-12 md:w-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center overflow-hidden group-hover:border-gold transition-all duration-300 group-hover:shadow-md">
                        <img src="logo.jpg" alt="Logo" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=CG&background=8b1e0f&color=fff'">
                    </div>
                    <div class="flex flex-col justify-center">
                        <h1 class="font-serif text-[18px] md:text-2xl font-black leading-none tracking-tight shine-text uppercase">Chulha Ghar</h1>
                        <p class="text-[8px] md:text-[9px] font-bold text-gold tracking-[0.25em] mt-1 uppercase">Deoghar</p>
                    </div>
                </a>
            </div>

            <!-- Center: Search (Desktop) -->
            <div class="hidden lg:flex flex-1 max-w-2xl relative group mx-8">
                <input type="text" id="desktop-search" placeholder="Search premium cookware, dinner sets..." class="w-full h-12 bg-gray-50/80 border border-gray-200 rounded-full pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-gold focus:bg-white transition-all shadow-inner hover:border-gray-300">
                <i class="fa-solid fa-search absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors pointer-events-none"></i>
            </div>

            <!-- Right Side: Icons -->
            <div class="flex items-center gap-4 lg:gap-6 text-gray-600 flex-shrink-0">
                <a href="wishlist.html" class="relative hover:text-primary transition-colors p-2 flex flex-col items-center group">
                    <i class="fa-regular fa-heart text-xl md:text-2xl group-hover:scale-110 transition-transform"></i>
                    <span id="wishlist-count" class="absolute top-0 right-0 bg-primary text-white text-[9px] md:text-[10px] font-bold h-4 w-4 md:h-5 md:w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">0</span>
                </a>
                <a href="cart.html" class="relative hover:text-primary transition-colors p-2 flex flex-col items-center group">
                    <i class="fa-solid fa-cart-shopping text-xl md:text-2xl group-hover:scale-110 transition-transform"></i>
                    <span id="cart-count" class="absolute top-0 right-0 bg-gold text-ink text-[9px] md:text-[10px] font-bold h-4 w-4 md:h-5 md:w-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">0</span>
                </a>
                <a href="login.html" class="hidden md:flex hover:text-primary transition-colors p-2 flex-col items-center group">
                    <i class="fa-regular fa-user text-xl md:text-2xl group-hover:scale-110 transition-transform"></i>
                </a>
            </div>
        </div>

        <!-- Mobile Search Bar -->
        <div class="lg:hidden px-4 pb-3">
            <div class="relative">
                <input type="text" id="mobile-search" placeholder="Search products..." class="w-full h-11 bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 text-sm font-medium focus:outline-none focus:border-gold focus:bg-white shadow-inner transition-all">
                <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none"></i>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Drawer & Overlay (Touch Fixed) -->
    <div id="mobile-menu" class="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none"></div>
    
    <div id="menu-drawer" class="fixed top-0 left-0 h-[100dvh] w-[85%] max-w-sm bg-white z-[120] shadow-2xl transform transition-transform duration-300 -translate-x-full flex flex-col">
        <div class="bg-gradient-to-br from-primary to-[#4a0e06] p-6 flex justify-between items-center text-white shrink-0">
            <div class="flex items-center gap-4">
                <div class="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm"><i class="fa-regular fa-user text-xl"></i></div>
                <div>
                    <div class="font-bold text-sm tracking-wide">Welcome Guest</div>
                    <a href="login.html" class="text-[11px] text-gold hover:text-white transition-colors underline tracking-wider">Login / Signup</a>
                </div>
            </div>
            <button id="close-menu" class="text-white p-2 hover:bg-white/10 rounded-full active:bg-white/20 transition-colors"><i class="fa-solid fa-xmark text-2xl"></i></button>
        </div>
        
        <div class="flex-1 overflow-y-auto flex flex-col font-semibold text-gray-700 text-[15px]">
            <a href="index.html" class="p-5 border-b border-gray-100 flex items-center justify-between hover:bg-bgLight hover:text-primary transition-colors"><span class="flex items-center gap-4"><i class="fa-solid fa-house text-gold w-6 text-center text-lg"></i> Home</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            <a href="shop.html" class="p-5 border-b border-gray-100 flex items-center justify-between hover:bg-bgLight hover:text-primary transition-colors"><span class="flex items-center gap-4"><i class="fa-solid fa-shop text-gold w-6 text-center text-lg"></i> Shop All</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            <a href="wishlist.html" class="p-5 border-b border-gray-100 flex items-center justify-between hover:bg-bgLight hover:text-primary transition-colors"><span class="flex items-center gap-4"><i class="fa-solid fa-heart text-gold w-6 text-center text-lg"></i> My Wishlist</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            <a href="orders.html" class="p-5 border-b border-gray-100 flex items-center justify-between hover:bg-bgLight hover:text-primary transition-colors"><span class="flex items-center gap-4"><i class="fa-solid fa-box text-gold w-6 text-center text-lg"></i> My Orders</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            <a href="contact.html" class="p-5 border-b border-gray-100 flex items-center justify-between hover:bg-bgLight hover:text-primary transition-colors"><span class="flex items-center gap-4"><i class="fa-solid fa-phone text-gold w-6 text-center text-lg"></i> Contact Us</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            
            <a href="admin.html" class="p-5 border-b border-gray-100 flex items-center justify-between text-primary bg-red-50/50 hover:bg-red-50 mt-auto transition-colors"><span class="flex items-center gap-4"><i class="fa-solid fa-user-shield w-6 text-center text-lg"></i> Admin Panel</span> <i class="fa-solid fa-chevron-right text-red-300 text-xs"></i></a>
        </div>
    </div>
`;

// ==========================================================
// 2. FOOTER HTML TEMPLATE (PARALLAX SETUP)
// ==========================================================
const footerHTML = `
    <!-- Note: z-0 and fixed at bottom creates the parallax reveal effect -->
    <footer id="parallax-footer" class="fixed bottom-0 left-0 w-full z-0 bg-[#111111] text-white pt-16 pb-8 border-t-[4px] border-primary">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                
                <div class="lg:col-span-1">
                    <h2 class="font-serif text-2xl font-black shine-text uppercase mb-4">Chulha Ghar</h2>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6">Your one-stop destination for premium kitchen appliances, elegant dining sets, and everyday cooking essentials in Deoghar.</p>
                    <div class="flex gap-4">
                        <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-colors"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-colors"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-colors"><i class="fa-brands fa-whatsapp text-lg"></i></a>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-gold font-bold uppercase tracking-wider mb-5 text-xs">Quick Links</h3>
                    <ul class="space-y-3 text-sm text-gray-300">
                        <li><a href="shop.html" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-right text-[10px] text-gray-500"></i> Shop All Products</a></li>
                        <li><a href="wishlist.html" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-right text-[10px] text-gray-500"></i> My Wishlist</a></li>
                        <li><a href="orders.html" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-right text-[10px] text-gray-500"></i> Track Order</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-gold font-bold uppercase tracking-wider mb-5 text-xs">Support</h3>
                    <ul class="space-y-3 text-sm text-gray-300">
                        <li><a href="contact.html" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-right text-[10px] text-gray-500"></i> Contact Us</a></li>
                        <li><a href="refund-policy.html" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-right text-[10px] text-gray-500"></i> Return Policy</a></li>
                        <li><a href="terms.html" class="hover:text-white transition-colors flex items-center gap-2"><i class="fa-solid fa-angle-right text-[10px] text-gray-500"></i> Terms & Conditions</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-gold font-bold uppercase tracking-wider mb-5 text-xs">Contact Us</h3>
                    <ul class="space-y-4 text-sm text-gray-300">
                        <li class="flex gap-3 items-start"><i class="fa-solid fa-location-dot mt-1 text-gold"></i> <span>Bilasi Town, Near Clock Tower,<br>Deoghar, Jharkhand 814112</span></li>
                        <li class="flex gap-3 items-center"><i class="fa-solid fa-phone text-gold"></i> <span class="font-semibold">+91 99999 99999</span></li>
                        <li class="flex gap-3 items-center"><i class="fa-solid fa-envelope text-gold"></i> <span>support@chulhaghar.in</span></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <p>&copy; 2026 Chulha Ghar, Deoghar. All rights reserved.</p>
                <div class="flex gap-4">
                    <i class="fa-brands fa-cc-visa text-2xl hover:text-white transition-colors"></i>
                    <i class="fa-brands fa-cc-mastercard text-2xl hover:text-white transition-colors"></i>
                    <i class="fa-brands fa-amazon-pay text-2xl hover:text-white transition-colors"></i>
                </div>
            </div>
        </div>
    </footer>
`;

// ==========================================================
// 3. REGISTERING WEB COMPONENTS & LOGIC
// ==========================================================

class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = headerHTML;
        this.initLogic();
    }
    
    initLogic() {
        // Mobile Menu Toggle Logic
        const menuBtn = this.querySelector('#menu-btn');
        const closeBtn = this.querySelector('#close-menu');
        const mobileMenu = this.querySelector('#mobile-menu');
        const menuDrawer = this.querySelector('#menu-drawer');

        const openMenu = () => {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
            menuDrawer.classList.remove('-translate-x-full');
            document.body.style.overflow = 'hidden'; // Stop background scroll
        };
        const closeMenu = () => {
            menuDrawer.classList.add('-translate-x-full');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'auto'; // Restore background scroll
        };

        if(menuBtn && closeBtn && mobileMenu && menuDrawer) {
            menuBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
            mobileMenu.addEventListener('click', closeMenu); // Clicking outside closes menu
        }

        // Real-time Search Redirection Logic
        const setupSearch = (inputId) => {
            const searchInput = this.querySelector(inputId);
            if(searchInput) {
                searchInput.addEventListener('keypress', (e) => {
                    if(e.key === 'Enter' && searchInput.value.trim() !== '') {
                        window.location.href = `shop.html?search=${encodeURIComponent(searchInput.value.trim())}`;
                    }
                });
            }
        };
        setupSearch('#desktop-search');
        setupSearch('#mobile-search');

        // Cart and Wishlist Real-time Sync
        const updateCounts = () => {
            try {
                const cart = JSON.parse(localStorage.getItem("chulha_cart") || "[]");
                const wishlist = JSON.parse(localStorage.getItem("chulha_wishlist") || "[]");
                
                const cartCountEl = this.querySelector('#cart-count');
                const wishlistCountEl = this.querySelector('#wishlist-count');
                
                const totalCartQty = cart.reduce((total, item) => total + (item.qty || 1), 0);
                
                if(cartCountEl) cartCountEl.innerText = totalCartQty;
                if(wishlistCountEl) wishlistCountEl.innerText = wishlist.length;
            } catch(e) { console.error("Error reading storage for counts"); }
        };

        updateCounts();
        window.addEventListener('chulha-cart-updated', updateCounts);
        window.addEventListener('chulha-wishlist-updated', updateCounts);
        
        // Hide Welcome Banner on Scroll down for a sleek look
        const banner = this.querySelector('#welcome-banner');
        window.addEventListener('scroll', () => {
            if(!banner) return;
            if (window.scrollY > 10) {
                banner.style.maxHeight = '0px';
                banner.style.opacity = '0';
                banner.style.paddingTop = '0px';
                banner.style.paddingBottom = '0px';
            } else {
                banner.style.maxHeight = '40px';
                banner.style.opacity = '1';
                banner.style.paddingTop = '8px';
                banner.style.paddingBottom = '8px';
            }
        }, { passive: true });
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = footerHTML;
        this.initParallax();
    }
    
    initParallax() {
        // Parallax Magic: Dynamically add margin to the main wrapper
        // so the fixed footer is revealed naturally as user scrolls to bottom.
        const adjustParallax = () => {
            const footer = this.querySelector('#parallax-footer');
            const mainWrapper = document.getElementById('main-wrapper'); 
            
            if (footer && mainWrapper) {
                mainWrapper.style.marginBottom = footer.offsetHeight + 'px';
            }
        };

        window.addEventListener('resize', adjustParallax);
        
        // Multiple timeouts to ensure all fonts and images are loaded before height calculation
        setTimeout(adjustParallax, 100); 
        setTimeout(adjustParallax, 500); 
        setTimeout(adjustParallax, 1500);
    }
}

// Define Custom Web Elements
customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
