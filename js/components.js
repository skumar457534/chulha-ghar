// ==========================================================
// 1. HEADER HTML TEMPLATE
// ==========================================================
const headerHTML = `
    <!-- Top Welcome Banner -->
    <div id="welcome-banner" class="w-full bg-[#64150c] text-white py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase border-b border-[#8b1e0f] relative z-50 overflow-hidden transition-all duration-300">
        <div class="whitespace-nowrap w-full">
            <style>
                @keyframes slideText { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }
                .animate-slide-text { display: inline-block; padding-left: 100%; animation: slideText 15s linear infinite; }
                .animate-slide-text:hover { animation-play-state: paused; }
                
                /* Premium Shine Effect for Logo */
                .shine-text {
                    background: linear-gradient(to right, #8b1e0f 20%, #d4af37 40%, #d4af37 60%, #8b1e0f 80%);
                    background-size: 200% auto; color: transparent; -webkit-background-clip: text; background-clip: text;
                    animation: shine 4s linear infinite;
                }
                @keyframes shine { to { background-position: 200% center; } }
            </style>
            <span class="animate-slide-text">Welcome to Chulha Ghar, Deoghar <span class="text-[#d4af37] mx-3">•</span> Premium Kitchen Essentials <span class="text-[#d4af37] mx-3">•</span> Free Delivery on orders above ₹999</span>
        </div>
    </div>

    <!-- Main Header -->
    <header class="bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-0 z-[100] shadow-sm">
        <div class="container mx-auto px-4 lg:px-8 flex h-[72px] md:h-20 items-center gap-4 justify-between">
            
            <!-- Left Side: Hamburger (Mobile) + Logo -->
            <div class="flex items-center gap-3 lg:gap-5 flex-shrink-0">
                <button id="menu-btn" class="lg:hidden text-gray-700 hover:text-[#8b1e0f] transition-colors p-1 active:scale-95">
                    <i class="fa-solid fa-bars text-2xl"></i>
                </button>
                <a href="index.html" class="flex items-center gap-2 lg:gap-3 group">
                    <div class="h-10 w-10 md:h-12 md:w-12 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center overflow-hidden group-hover:border-[#d4af37] transition-colors">
                        <!-- Upload 'logo.jpg' in your repo, otherwise it uses a dummy one -->
                        <img src="logo.jpg" alt="Logo" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=CG&background=8b1e0f&color=fff'">
                    </div>
                    <div class="flex flex-col justify-center">
                        <h1 class="font-serif text-[18px] md:text-2xl font-extrabold leading-none tracking-tight shine-text uppercase">Chulha Ghar</h1>
                        <p class="text-[8px] md:text-[9px] font-bold text-[#d4af37] tracking-[0.25em] mt-1 uppercase">Deoghar</p>
                    </div>
                </a>
            </div>

            <!-- Center: Search (Desktop) -->
            <div class="hidden lg:flex flex-1 max-w-2xl relative group mx-4">
                <input type="text" id="desktop-search" placeholder="Search Mixer, Chimney, Cookware..." class="w-full h-11 bg-gray-50 border border-gray-200 rounded-full pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-[#d4af37] focus:bg-white transition-all shadow-inner">
                <i class="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#8b1e0f] transition-colors"></i>
            </div>

            <!-- Right Side: Icons -->
            <div class="flex items-center gap-4 lg:gap-6 text-gray-600 flex-shrink-0">
                <a href="wishlist.html" class="relative hover:text-[#8b1e0f] transition-colors p-1">
                    <i class="fa-regular fa-heart text-xl md:text-2xl"></i>
                    <span id="wishlist-count" class="absolute -top-1 -right-1 bg-[#8b1e0f] text-white text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">0</span>
                </a>
                <a href="cart.html" class="relative hover:text-[#8b1e0f] transition-colors p-1">
                    <i class="fa-solid fa-cart-shopping text-xl md:text-2xl"></i>
                    <span id="cart-count" class="absolute -top-1 -right-1 bg-[#d4af37] text-black text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">0</span>
                </a>
                <a href="login.html" class="hidden md:flex hover:text-[#8b1e0f] transition-colors p-1">
                    <i class="fa-regular fa-user text-xl md:text-2xl"></i>
                </a>
            </div>
        </div>

        <!-- Mobile Search Bar -->
        <div class="lg:hidden px-4 pb-3">
            <div class="relative">
                <input type="text" id="mobile-search" placeholder="Search products..." class="w-full h-10 bg-gray-50 border border-gray-200 rounded-full pl-10 pr-4 text-sm focus:outline-none focus:border-[#d4af37]">
                <i class="fa-solid fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
            </div>
        </div>
    </header>

    <!-- Mobile Menu Drawer & Overlay -->
    <div id="mobile-menu" class="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm transition-opacity duration-300 opacity-0 pointer-events-none"></div>
    <div id="menu-drawer" class="fixed top-0 left-0 h-[100dvh] w-[80%] max-w-sm bg-white z-[120] shadow-2xl transform transition-transform duration-300 -translate-x-full flex flex-col">
        <div class="bg-gradient-to-br from-[#8b1e0f] to-[#64150c] p-5 flex justify-between items-center text-white shrink-0">
            <div class="flex items-center gap-3">
                <div class="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center"><i class="fa-regular fa-user"></i></div>
                <div>
                    <div class="font-bold text-sm">Welcome Guest</div>
                    <a href="login.html" class="text-[10px] text-[#d4af37] underline tracking-wide">Login / Signup</a>
                </div>
            </div>
            <button id="close-menu" class="text-white p-2 hover:bg-white/10 rounded-full active:bg-white/20"><i class="fa-solid fa-xmark text-xl"></i></button>
        </div>
        <div class="flex-1 overflow-y-auto flex flex-col font-semibold text-gray-700 text-sm">
            <a href="index.html" class="p-4 border-b border-gray-100 flex items-center justify-between active:bg-gray-50"><span class="flex items-center gap-3"><i class="fa-solid fa-house text-[#d4af37] w-5 text-center"></i> Home</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            <a href="shop.html" class="p-4 border-b border-gray-100 flex items-center justify-between active:bg-gray-50"><span class="flex items-center gap-3"><i class="fa-solid fa-shop text-[#d4af37] w-5 text-center"></i> Shop All</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            <a href="orders.html" class="p-4 border-b border-gray-100 flex items-center justify-between active:bg-gray-50"><span class="flex items-center gap-3"><i class="fa-solid fa-box text-[#d4af37] w-5 text-center"></i> My Orders</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            <a href="contact.html" class="p-4 border-b border-gray-100 flex items-center justify-between active:bg-gray-50"><span class="flex items-center gap-3"><i class="fa-solid fa-phone text-[#d4af37] w-5 text-center"></i> Contact Us</span> <i class="fa-solid fa-chevron-right text-gray-300 text-xs"></i></a>
            <a href="admin.html" class="p-4 border-b border-gray-100 flex items-center justify-between text-[#8b1e0f] bg-red-50/50 active:bg-red-50 mt-auto"><span class="flex items-center gap-3"><i class="fa-solid fa-user-shield w-5 text-center"></i> Admin Panel</span> <i class="fa-solid fa-chevron-right text-red-300 text-xs"></i></a>
        </div>
    </div>
`;

// ==========================================================
// 2. FOOTER HTML TEMPLATE (Parallax Setup)
// ==========================================================
const footerHTML = `
    <!-- Note: z-0 and fixed at bottom creates the parallax reveal effect -->
    <footer id="parallax-footer" class="fixed bottom-0 left-0 w-full z-0 bg-[#1a1a1a] text-white pt-16 pb-8 border-t-[6px] border-[#8b1e0f]">
        <div class="container mx-auto px-4 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                <div class="lg:col-span-1">
                    <h2 class="font-serif text-2xl font-bold shine-text uppercase mb-4">Chulha Ghar</h2>
                    <p class="text-gray-400 text-sm leading-relaxed mb-6">Your one-stop destination for premium kitchen appliances, elegant dining sets, and everyday cooking essentials in Deoghar.</p>
                    <div class="flex gap-4">
                        <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
                <div>
                    <h3 class="text-[#d4af37] font-bold uppercase tracking-wider mb-4 text-sm">Quick Links</h3>
                    <ul class="space-y-3 text-sm text-gray-300">
                        <li><a href="shop.html" class="hover:text-white transition-colors">Shop All Products</a></li>
                        <li><a href="wishlist.html" class="hover:text-white transition-colors">My Wishlist</a></li>
                        <li><a href="orders.html" class="hover:text-white transition-colors">Track Order</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-[#d4af37] font-bold uppercase tracking-wider mb-4 text-sm">Support</h3>
                    <ul class="space-y-3 text-sm text-gray-300">
                        <li><a href="contact.html" class="hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="refund-policy.html" class="hover:text-white transition-colors">Return Policy</a></li>
                        <li><a href="terms.html" class="hover:text-white transition-colors">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-[#d4af37] font-bold uppercase tracking-wider mb-4 text-sm">Contact Us</h3>
                    <ul class="space-y-4 text-sm text-gray-300">
                        <li class="flex gap-3 items-start"><i class="fa-solid fa-location-dot mt-1 text-[#d4af37]"></i> <span>Bilasi Town, Near Clock Tower,<br>Deoghar, Jharkhand 814112</span></li>
                        <li class="flex gap-3 items-center"><i class="fa-solid fa-phone text-[#d4af37]"></i> <span>+91 99999 99999</span></li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
                <p>&copy; 2026 Chulha Ghar, Deoghar. All rights reserved.</p>
                <div class="flex gap-4">
                    <i class="fa-brands fa-cc-visa text-2xl"></i>
                    <i class="fa-brands fa-cc-mastercard text-2xl"></i>
                    <i class="fa-brands fa-cc-amazon-pay text-2xl"></i>
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
        };
        const closeMenu = () => {
            menuDrawer.classList.add('-translate-x-full');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        };

        if(menuBtn && closeBtn && mobileMenu && menuDrawer) {
            menuBtn.addEventListener('click', openMenu);
            closeBtn.addEventListener('click', closeMenu);
            mobileMenu.addEventListener('click', closeMenu);
        }

        // Cart and Wishlist Sync Logic
        const updateCounts = () => {
            try {
                const cart = JSON.parse(localStorage.getItem("chulha_cart") || "[]");
                const wishlist = JSON.parse(localStorage.getItem("chulha_wishlist") || "[]");
                
                const cartCountEl = this.querySelector('#cart-count');
                const wishlistCountEl = this.querySelector('#wishlist-count');
                
                if(cartCountEl) cartCountEl.innerText = cart.length;
                if(wishlistCountEl) wishlistCountEl.innerText = wishlist.length;
            } catch(e) { console.error("Error reading localStorage"); }
        };

        // Update initially and listen for custom events
        updateCounts();
        window.addEventListener('chulha-cart-updated', updateCounts);
        window.addEventListener('chulha-wishlist-updated', updateCounts);
        window.addEventListener('storage', updateCounts);

        // Hide Welcome Banner on Scroll down
        const banner = this.querySelector('#welcome-banner');
        window.addEventListener('scroll', () => {
            if(!banner) return;
            if (window.scrollY > 5) {
                banner.style.maxHeight = '0px';
                banner.style.opacity = '0';
                banner.style.paddingTop = '0px';
                banner.style.paddingBottom = '0px';
            } else {
                banner.style.maxHeight = '40px';
                banner.style.opacity = '1';
                banner.style.paddingTop = '6px';
                banner.style.paddingBottom = '6px';
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
        // Parallax Magic: Make space at the bottom of the main content wrapper
        // exactly equal to the height of the fixed footer.
        const adjustParallax = () => {
            const footer = this.querySelector('#parallax-footer');
            const mainWrapper = document.getElementById('main-wrapper'); // We will add this ID in our HTML pages
            
            if (footer && mainWrapper) {
                mainWrapper.style.marginBottom = footer.offsetHeight + 'px';
            }
        };

        // Adjust on load and resize
        window.addEventListener('resize', adjustParallax);
        // Timeout ensures fonts/images are loaded before calculating height
        setTimeout(adjustParallax, 100); 
        setTimeout(adjustParallax, 500); 
    }
}

// Define the tags so HTML understands <app-header> and <app-footer>
customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
