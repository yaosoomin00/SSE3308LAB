
import { useEffect, useMemo, useState } from "react";

// ==========================================
// FOOD CATEGORIES
// ==========================================

const foodCategories = [
  { name: "All", emoji: "🍽️" },
  { name: "Malaysian", emoji: "🍛" },
  { name: "Burgers", emoji: "🍔" },
  { name: "Pizza", emoji: "🍕" },
  { name: "Japanese", emoji: "🍣" },
  { name: "Western", emoji: "🍝" },
  { name: "Drinks", emoji: "🧋" },
  { name: "Desserts", emoji: "🍰" },
];

// ==========================================
// FOOD MENU
// ==========================================

const foods = [
  { id: 1, name: "Nasi Goreng Seafood", description: "Fragrant rice, prawns, squid & crispy anchovies", price: 12.9, category: "Malaysian", restaurant: "Dapur Melayu", rating: 4.9, time: "20-30 min", tag: "Bestseller", image: "photo-1512058564366-18510be2db19" },
  { id: 2, name: "Ayam Sambal Pedas", description: "Crispy chicken with spicy sambal", price: 15.9, category: "Malaysian", restaurant: "Dapur Melayu", rating: 4.8, time: "25-35 min", tag: "Popular", image: "photo-1604908176997-125f25cc6f3d" },
  { id: 3, name: "Classic Beef Burger", description: "Juicy beef patty, cheddar, lettuce & special sauce", price: 18.9, category: "Burgers", restaurant: "Burger House", rating: 4.8, time: "20-30 min", tag: "Popular", image: "photo-1568901346375-23c9450c58cd" },
  { id: 4, name: "Double Cheese Burger", description: "Double beef patty with melted cheese", price: 23.9, category: "Burgers", restaurant: "Burger House", rating: 4.9, time: "20-30 min", tag: "Must Try", image: "photo-1553979459-d2229ba7433b" },
  { id: 5, name: "Pepperoni Pizza", description: "Italian crust, mozzarella & pepperoni", price: 25.9, category: "Pizza", restaurant: "Pizza Corner", rating: 4.7, time: "30-40 min", tag: "Popular", image: "photo-1628840042765-356cda07504e" },
  { id: 6, name: "Cheese Lover Pizza", description: "Loaded with four kinds of delicious cheese", price: 27.9, category: "Pizza", restaurant: "Pizza Corner", rating: 4.8, time: "30-40 min", tag: "", image: "photo-1571407970349-bc81e7e96d47" },
  { id: 7, name: "Salmon Sushi Set", description: "Fresh salmon nigiri and assorted sushi rolls", price: 22.9, category: "Japanese", restaurant: "Sakura Sushi", rating: 4.9, time: "20-30 min", tag: "Fresh", image: "photo-1579871494447-9811cf80d66c" },
  { id: 8, name: "Chicken Teriyaki Bowl", description: "Grilled chicken, Japanese rice & teriyaki sauce", price: 19.9, category: "Japanese", restaurant: "Sakura Sushi", rating: 4.7, time: "25-35 min", tag: "", image: "photo-1546069901-ba9599a7e63c" },
  { id: 9, name: "Creamy Carbonara", description: "Creamy pasta with parmesan and crispy beef strips", price: 21.9, category: "Western", restaurant: "Pasta Avenue", rating: 4.8, time: "25-35 min", tag: "Chef's Choice", image: "photo-1612874742237-6526221588e3" },
  { id: 10, name: "Grilled Chicken Chop", description: "Tender grilled chicken with black pepper sauce", price: 23.9, category: "Western", restaurant: "Pasta Avenue", rating: 4.7, time: "30-40 min", tag: "", image: "photo-1532550907401-a500c9a57435" },
  { id: 11, name: "Iced Matcha Latte", description: "Premium Japanese matcha with fresh milk", price: 12.9, category: "Drinks", restaurant: "Daily Sips", rating: 4.9, time: "10-20 min", tag: "Trending", image: "photo-1515823064-d6e0c04616a7" },
  { id: 12, name: "Brown Sugar Boba", description: "Chewy pearls with rich brown sugar milk", price: 11.9, category: "Drinks", restaurant: "Daily Sips", rating: 4.8, time: "10-20 min", tag: "Popular", image: "photo-1558857563-b371033873b8" },
  { id: 13, name: "Strawberry Smoothie", description: "Fresh strawberries blended with creamy yogurt", price: 13.9, category: "Drinks", restaurant: "Daily Sips", rating: 4.7, time: "10-20 min", tag: "", image: "photo-1505252585461-04db1eb84625" },
  { id: 14, name: "Iced Caramel Latte", description: "Espresso, fresh milk and sweet caramel", price: 12.5, category: "Drinks", restaurant: "Coffee Lab", rating: 4.8, time: "10-20 min", tag: "", image: "photo-1461023058943-07fcbe16d735" },
  { id: 15, name: "Chocolate Lava Cake", description: "Warm chocolate cake with a melted centre", price: 14.9, category: "Desserts", restaurant: "Sweet Treats", rating: 4.9, time: "15-25 min", tag: "Bestseller", image: "photo-1606313564200-e75d5e30476c" },
  { id: 16, name: "Strawberry Cheesecake", description: "Creamy cheesecake topped with fresh strawberries", price: 15.9, category: "Desserts", restaurant: "Sweet Treats", rating: 4.8, time: "15-25 min", tag: "", image: "photo-1533134242443-d4fd215305ad" },
  { id: 17, name: "Lamb Skewer Special", description: "Tender lamb skewers with aromatic spices & fries", price: 17.9, category: "Malaysian", restaurant: "Dapur Melayu", rating: 4.8, time: "25-35 min", tag: "Popular", image: "photo-1603360946369-dc9bb6258143" },
  { id: 18, name: "French Fries", description: "Golden crispy fries with signature seasoning", price: 7.9, category: "Western", restaurant: "Burger House", rating: 4.6, time: "15-20 min", tag: "", image: "photo-1573080496219-bb080dd4f877" },
  { id: 19, name: "Chicken Ramen", description: "Rich Japanese broth with noodles and tender chicken", price: 20.9, category: "Japanese", restaurant: "Sakura Sushi", rating: 4.8, time: "25-35 min", tag: "", image: "photo-1569718212165-3a8278d5f624" },
  { id: 20, name: "Chocolate Indulgence Cheesecake", description: "Choco cake cream with a buttery biscuit and icecream base", price: 14.5, category: "Desserts", restaurant: "Sweet Treats", rating: 4.7, time: "15-25 min", tag: "New", image: "photo-1578985545062-69928b1d9587" },
];

// ==========================================
// RESTAURANTS
// ==========================================

const restaurants = [
  { name: "Dapur Melayu", type: "Authentic Malaysian", rating: "4.9", time: "20-30 min", image: "photo-1517248135467-4c7edcad34c4" },
  { name: "Burger House", type: "Burgers & Fast Food", rating: "4.8", time: "20-30 min", image: "photo-1555396273-367ea4eb4db5" },
  { name: "Sakura Sushi", type: "Japanese Cuisine", rating: "4.9", time: "25-35 min", image: "photo-1579027989536-b7b1f875659b" },
  { name: "Sweet Treats", type: "Desserts & Bakery", rating: "4.8", time: "15-25 min", image: "photo-1559339352-11d035aa65de" },
];

const photo = (id, width = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const ORDER_STAGES = [
  {
    title: "Order Placed",
    description: "Your order has been received successfully.",
    icon: "📝",
  },
  {
    title: "Restaurant Preparing",
    description: "Your food is being freshly prepared.",
    icon: "👨‍🍳",
  },
  {
    title: "Out for Delivery",
    description: "Your delivery rider is on the way!",
    icon: "🛵",
  },
  {
    title: "Delivered",
    description: "Your delicious food has arrived. Enjoy!",
    icon: "🎉",
  },
];

// ==========================================
// MAIN APPLICATION
// ==========================================

function App() {
  // ----------------------------------------
  // ORIGINAL WEBSITE STATES
  // ----------------------------------------

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notification, setNotification] = useState("");

  // ----------------------------------------
  // NEW ACCOUNT STATES
  // ----------------------------------------

  const [users, setUsers] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("foodieUsers")) || [];
    } catch {
      return [];
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("foodieCurrentUser")) || null;
    } catch {
      return null;
    }
  });

  const [accountView, setAccountView] = useState("");
  const [profileAddress, setProfileAddress] = useState("");

  // ----------------------------------------
  // NEW CHECKOUT STATES
  // ----------------------------------------

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  // ----------------------------------------
  // NEW ORDER TRACKING STATES
  // ----------------------------------------

  const [orders, setOrders] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("foodieOrders")) || [];
    } catch {
      return [];
    }
  });

  const [activeOrder, setActiveOrder] = useState(null);

  // ----------------------------------------
  // SAVE DATA TO LOCAL STORAGE
  // ----------------------------------------

  useEffect(() => {
    localStorage.setItem("foodieUsers", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("foodieOrders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem(
      "foodieCurrentUser",
      JSON.stringify(currentUser)
    );
  }, [currentUser]);

  // Restore active order after refresh
  useEffect(() => {
    try {
      const savedOrder = JSON.parse(
        localStorage.getItem("foodieActiveOrder")
      );

      if (savedOrder) {
        setActiveOrder(savedOrder);
      }
    } catch {
      localStorage.removeItem("foodieActiveOrder");
    }
  }, []);

  // ----------------------------------------
  // DEMO ORDER TRACKING
  // Progress automatically changes every 15 sec
  // ----------------------------------------

  useEffect(() => {
    if (!activeOrder || activeOrder.statusIndex >= 3) return;

    const timer = setInterval(() => {
      setOrders((previous) =>
        previous.map((order) => {
          if (order.id !== activeOrder.id) return order;

          return {
            ...order,
            statusIndex: Math.min(order.statusIndex + 1, 3),
          };
        })
      );
    }, 15000);

    return () => clearInterval(timer);
  }, [activeOrder?.id, activeOrder?.statusIndex]);

  // Keep active order updated
  useEffect(() => {
    if (!activeOrder) return;

    const updatedOrder = orders.find(
      (order) => order.id === activeOrder.id
    );

    if (updatedOrder) {
      setActiveOrder(updatedOrder);

      localStorage.setItem(
        "foodieActiveOrder",
        JSON.stringify(updatedOrder)
      );
    }
  }, [orders]);

  // ----------------------------------------
  // FOOD SEARCH & FILTER
  // ----------------------------------------

  const filteredFoods = useMemo(() => {
    return foods.filter((food) => {
      const matchesCategory =
        activeCategory === "All" ||
        food.category === activeCategory;

      const matchesSearch =
        food.name.toLowerCase().includes(search.toLowerCase()) ||
        food.restaurant.toLowerCase().includes(search.toLowerCase()) ||
        food.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  // ----------------------------------------
  // CART CALCULATIONS
  // ----------------------------------------

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = cart.length > 0 ? 4 : 0;
  const total = subtotal + deliveryFee;

  // ----------------------------------------
  // NOTIFICATION
  // ----------------------------------------

  const showNotification = (message) => {
    setNotification(message);

    setTimeout(() => {
      setNotification("");
    }, 2500);
  };

  // ----------------------------------------
  // CART FUNCTIONS
  // ----------------------------------------

  const addToCart = (food) => {
    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === food.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...food, quantity: 1 }];
    });

    showNotification(`${food.name} added to your cart!`);
  };

  const updateQuantity = (id, change) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const scrollToFood = () => {
    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // ----------------------------------------
  // USER REGISTRATION
  // ----------------------------------------

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.namedItem("name").value.trim();
    const email = form.elements.namedItem("email").value.trim().toLowerCase();
    const password = form.elements.namedItem("password").value;

    if (users.some((user) => user.email === email)) {
      showNotification("This email is already registered!");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      address: "",
    };

    setUsers((previous) => [...previous, newUser]);

    setCurrentUser(newUser);
    setProfileAddress("");

    setAccountView("profile");

    showNotification("Account created successfully! ❤️");
  };

  // ----------------------------------------
  // USER LOGIN
  // ----------------------------------------

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const email = form.elements.namedItem("email").value.trim().toLowerCase();
    const password = form.elements.namedItem("password").value;

    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!foundUser) {
      showNotification("Incorrect email or password!");
      return;
    }

    setCurrentUser(foundUser);
    setProfileAddress(foundUser.address || "");

    setAccountView("profile");

    showNotification(`Welcome back, ${foundUser.name}!`);
  };

  // ----------------------------------------
  // UPDATE USER PROFILE
  // ----------------------------------------

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!currentUser) return;

    const form = e.currentTarget;

    const name = form.elements.namedItem("name").value.trim();
    const address = form.elements.namedItem("address").value.trim();

    const updatedUser = {
      ...currentUser,
      name,
      address,
    };

    setUsers((previous) =>
      previous.map((user) =>
        user.id === currentUser.id ? updatedUser : user
      )
    );

    setCurrentUser(updatedUser);
    setProfileAddress(address);

    showNotification("Profile updated successfully!");
  };

  // ----------------------------------------
  // USER LOGOUT
  // ----------------------------------------

  const handleLogout = () => {
    setCurrentUser(null);
    setAccountView("");
    showNotification("You have successfully logged out!");
  };

  // ----------------------------------------
  // OPEN ACCOUNT
  // ----------------------------------------

  const openAccount = () => {
    if (currentUser) {
      setAccountView("profile");
      setProfileAddress(currentUser.address || "");
    } else {
      setAccountView("login");
    }
  };

  // ----------------------------------------
  // CHECKOUT
  // ----------------------------------------

  const openCheckout = () => {
    if (cart.length === 0) return;

    if (currentUser) {
      setCustomerName(currentUser.name);
      setCustomerEmail(currentUser.email);
      setDeliveryAddress(currentUser.address || "");
    } else {
      setCustomerName("");
      setCustomerEmail("");
      setDeliveryAddress("");
    }

    setCartOpen(false);
    setCheckoutOpen(true);
  };

  // ----------------------------------------
  // PLACE ORDER
  // ----------------------------------------

  const placeOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) return;

    const order = {
      id: "FE" + Date.now().toString().slice(-8),
      name: customerName.trim(),
      email: customerEmail.trim().toLowerCase(),
      address: deliveryAddress.trim(),
      items: [...cart],
      subtotal,
      deliveryFee,
      total,
      statusIndex: 0,
      date: new Date().toLocaleString(),
      createdAt: Date.now(),
    };

    setOrders((previous) => [order, ...previous]);

    setActiveOrder(order);

    localStorage.setItem(
      "foodieActiveOrder",
      JSON.stringify(order)
    );

    // Update user's saved delivery address
    if (currentUser && currentUser.email === order.email) {
      const updatedUser = {
        ...currentUser,
        address: deliveryAddress.trim(),
      };

      setCurrentUser(updatedUser);

      setUsers((previous) =>
        previous.map((user) =>
          user.id === currentUser.id ? updatedUser : user
        )
      );
    }

    setCart([]);
    setCheckoutOpen(false);
    setAccountView("tracking");

    showNotification("Your order has been placed successfully!");
  };

  // ----------------------------------------
  // TRACK AN EXISTING ORDER
  // ----------------------------------------

  const trackOrder = (order) => {
    setActiveOrder(order);

    localStorage.setItem(
      "foodieActiveOrder",
      JSON.stringify(order)
    );

    setAccountView("tracking");
  };

  // ==========================================
  // WEBSITE UI
  // ==========================================

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#354B3B]">

      {/* ANNOUNCEMENT BAR */}

      <div className="bg-[#48634F] px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
        🌸 Enjoy FREE DELIVERY on your first order above RM50!
        <span className="ml-2 hidden font-bold sm:inline">
          Order now →
        </span>
      </div>

      {/* NAVBAR */}

      <header className="sticky top-0 z-40 border-b border-[#E8EDE5] bg-[#FFFDF9]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <a href="#" className="flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#DDEBDD] text-2xl shadow-sm">
              🍴
            </div>

            <div>
              <h1 className="text-xl font-black tracking-tight text-[#354B3B]">
                Foodie<span className="text-[#D58DA5]">Express</span>
              </h1>

              <p className="text-[10px] tracking-widest text-gray-400">
                GOOD FOOD, GOOD MOOD
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-gray-600 lg:flex">
            <a href="#" className="text-[#48634F]">Home</a>
            <a href="#restaurants" className="transition hover:text-[#D58DA5]">Restaurants</a>
            <a href="#menu" className="transition hover:text-[#D58DA5]">Explore Menu</a>

            <button
              onClick={() => setAccountView("tracking")}
              className="transition hover:text-[#D58DA5]"
            >
              Track Order
            </button>

            <a href="#about" className="transition hover:text-[#D58DA5]">About Us</a>
          </nav>

          <div className="flex items-center gap-3">

            <button
              onClick={() => setCartOpen(true)}
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#EDF3EA] text-xl transition hover:bg-[#F6DDE5]"
              aria-label="Open cart"
            >
              🛒

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#D58DA5] text-xs font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={openAccount}
              className="hidden rounded-full bg-[#48634F] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#354B3B] sm:block"
            >
              {currentUser
                ? `Hi, ${currentUser.name.split(" ")[0]}`
                : "Sign In"}
            </button>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-lg p-2 text-2xl lg:hidden"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="space-y-4 border-t border-[#E8EDE5] bg-[#FFFDF9] px-6 py-5 text-sm font-semibold lg:hidden">
            <a href="#" onClick={() => setMobileMenu(false)} className="block">Home</a>
            <a href="#restaurants" onClick={() => setMobileMenu(false)} className="block">Restaurants</a>
            <a href="#menu" onClick={() => setMobileMenu(false)} className="block">Explore Menu</a>

            <button
              onClick={() => {
                setMobileMenu(false);
                setAccountView("tracking");
              }}
              className="block"
            >
              Track Order
            </button>

            <button
              onClick={() => {
                setMobileMenu(false);
                openAccount();
              }}
              className="block"
            >
              {currentUser ? "My Account" : "Sign In / Register"}
            </button>

            <a href="#about" onClick={() => setMobileMenu(false)} className="block">About Us</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-[#EDF4EB]">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 md:grid-cols-2 md:py-20 lg:px-8">

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F6DDE5] px-4 py-2 text-sm font-bold text-[#A65F7B]">
              ✨ YOUR HAPPINESS, DELIVERED
            </div>

            <h2 className="max-w-xl text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Delicious Food.
              <span className="block text-[#D58DA5]">Delivered</span>
              To Your Door.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-gray-600 sm:text-lg">
              Craving something delicious? Discover your favourite meals
              from the best restaurants around you. Fresh, fast and always
              satisfying!
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={scrollToFood}
                className="rounded-full bg-[#48634F] px-8 py-4 font-bold text-white shadow-lg shadow-[#C8D9C5] transition hover:-translate-y-1 hover:bg-[#354B3B]"
              >
                Explore Food Menu →
              </button>

              <a
                href="#restaurants"
                className="rounded-full border-2 border-[#D9E4D5] bg-white px-8 py-4 font-bold transition hover:border-[#D58DA5] hover:text-[#D58DA5]"
              >
                View Restaurants
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-7">
              <div>
                <h3 className="text-2xl font-black">20+</h3>
                <p className="text-xs text-gray-500">Food Choices</p>
              </div>

              <div className="border-l border-[#D9E4D5] pl-7">
                <h3 className="text-2xl font-black">4.9 ⭐</h3>
                <p className="text-xs text-gray-500">Customer Rating</p>
              </div>

              <div className="border-l border-[#D9E4D5] pl-7">
                <h3 className="text-2xl font-black">30 min</h3>
                <p className="text-xs text-gray-500">Fast Delivery</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-[#E8C6D2] opacity-60 blur-3xl"></div>

            <img
              src={photo("photo-1568901346375-23c9450c58cd", 1000)}
              alt="Delicious gourmet burger"
              className="relative z-10 mx-auto h-[330px] w-full rounded-[35px] object-cover shadow-2xl sm:h-[450px]"
            />

            <div className="absolute -bottom-5 -left-2 z-20 rounded-2xl bg-white p-4 shadow-xl sm:left-0">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🍔</span>
                <div>
                  <p className="text-sm font-bold">Delicious deals!</p>
                  <p className="text-xs text-gray-500">Something for everyone</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-6 z-20 rounded-2xl bg-white px-4 py-3 shadow-xl sm:right-0">
              <p className="text-sm font-black">⭐ 4.9/5</p>
              <p className="text-xs text-gray-500">Loved by foodies</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-10 md:grid-cols-4 lg:px-8">
        {[
          ["🚀", "Fast Delivery", "Food at your doorstep"],
          ["🥬", "Fresh Ingredients", "Quality you can taste"],
          ["💳", "Easy Payments", "Simple and convenient"],
          ["❤️", "Made With Love", "Every meal matters"],
        ].map(([icon, title, desc]) => (
          <div
            key={title}
            className="flex items-center gap-3 rounded-2xl border border-[#E8EDE5] bg-white p-4 shadow-sm"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F6DDE5] text-2xl">
              {icon}
            </span>
            <div>
              <h3 className="text-sm font-bold">{title}</h3>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* FOOD CATEGORIES */}

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D58DA5]">
              WHAT ARE YOU CRAVING?
            </p>
            <h2 className="mt-2 text-3xl font-black">Explore Categories</h2>
            <p className="mt-2 text-sm text-gray-500">
              Find something delicious for every craving.
            </p>
          </div>

          <button
            onClick={() => {
              setActiveCategory("All");
              setSearch("");
              scrollToFood();
            }}
            className="text-sm font-bold text-[#48634F] hover:underline"
          >
            View all food →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {foodCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name);
                scrollToFood();
              }}
              className={`flex flex-col items-center gap-3 rounded-2xl border p-5 transition duration-200 hover:-translate-y-1 hover:border-[#E8C6D2] hover:shadow-md ${
                activeCategory === category.name
                  ? "border-[#D58DA5] bg-[#FCEEF2] shadow-sm"
                  : "border-[#E8EDE5] bg-white"
              }`}
            >
              <span className="text-4xl">{category.emoji}</span>
              <span className="text-xs font-bold">{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* SPECIAL OFFER */}

      <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-[#F6DDE5] p-8 text-[#354B3B] sm:p-12">
          <div className="relative z-10 max-w-lg">
            <span className="rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-[#48634F]">
              SPECIAL PROMOTION
            </span>

            <h2 className="mt-6 text-4xl font-black sm:text-5xl">
              20% OFF
              <br />
              YOUR FIRST ORDER!
            </h2>

            <p className="mt-4 text-sm text-[#725663]">
              Your first bite should be extra special. Enjoy amazing food
              at an amazing price.
            </p>

            <button
              onClick={scrollToFood}
              className="mt-7 rounded-full bg-[#48634F] px-7 py-3 font-bold text-white transition hover:bg-[#354B3B]"
            >
              Order Now →
            </button>
          </div>

          <div className="pointer-events-none absolute -right-8 -top-16 text-[220px] opacity-20 sm:right-10">
            🍕
          </div>
          <div className="pointer-events-none absolute bottom-0 right-28 text-7xl">
            🍟
          </div>
        </div>
      </section>

      {/* POPULAR RESTAURANTS */}

      <section id="restaurants" className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D58DA5]">
            THE BEST AROUND YOU
          </p>
          <h2 className="mt-2 text-3xl font-black">Popular Restaurants</h2>
          <p className="mt-2 text-sm text-gray-500">
            Discover your next favourite food destination.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.name}
              className="group overflow-hidden rounded-2xl border border-[#E8EDE5] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo(restaurant.image)}
                  alt={restaurant.name}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold shadow">
                  Open Now
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-black">{restaurant.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{restaurant.type}</p>

                <div className="mt-4 flex justify-between text-xs font-semibold text-gray-500">
                  <span>⭐ {restaurant.rating}</span>
                  <span>🕒 {restaurant.time}</span>
                </div>

                <button
                  onClick={() => {
                    setSearch(restaurant.name);
                    setActiveCategory("All");
                    scrollToFood();
                  }}
                  className="mt-5 w-full rounded-xl bg-[#FCEEF2] py-3 text-sm font-bold text-[#A65F7B] transition hover:bg-[#48634F] hover:text-white"
                >
                  Explore Menu →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOD MENU */}

      <section id="menu" className="bg-[#F0F5ED] py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#D58DA5]">
                MADE FRESH FOR YOU
              </p>
              <h2 className="mt-2 text-3xl font-black">Our Delicious Menu</h2>
              <p className="mt-2 text-sm text-gray-500">
                Explore our delicious selection of food and drinks.
              </p>
            </div>

            <div className="relative w-full md:max-w-sm">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
                🔍
              </span>

              <input
                type="text"
                placeholder="Search food or restaurant..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-[#DCE6D8] bg-white py-4 pl-12 pr-5 text-sm outline-none transition focus:border-[#D58DA5] focus:ring-2 focus:ring-[#F6DDE5]"
              />
            </div>
          </div>

          {/* FILTER BUTTONS */}

          <div className="mb-8 flex gap-2 overflow-x-auto pb-3">
            {foodCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-bold transition ${
                  activeCategory === category.name
                    ? "bg-[#48634F] text-white shadow-md"
                    : "border border-[#DCE6D8] bg-white text-gray-600 hover:border-[#D58DA5] hover:text-[#A65F7B]"
                }`}
              >
                {category.emoji} {category.name}
              </button>
            ))}
          </div>

          {/* FOOD CARDS */}

          {filteredFoods.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredFoods.map((food) => (
                <div
                  key={food.id}
                  className="group overflow-hidden rounded-2xl border border-[#E3EADF] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={photo(food.image)}
                      alt={food.name}
                      loading="lazy"
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {food.tag && (
                      <span className="absolute left-3 top-3 rounded-full bg-[#F6DDE5] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#96566F] shadow">
                        {food.tag}
                      </span>
                    )}

                    <button
                      onClick={() => addToCart(food)}
                      className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#48634F] shadow-lg transition hover:scale-110 hover:bg-[#48634F] hover:text-white"
                      aria-label={`Add ${food.name} to cart`}
                    >
                      +
                    </button>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D58DA5]">
                        {food.category}
                      </span>
                      <span className="text-xs font-bold">
                        ⭐ {food.rating}
                      </span>
                    </div>

                    <h3 className="mt-2 text-base font-black">{food.name}</h3>

                    <p className="mt-2 min-h-[40px] text-xs leading-5 text-gray-500">
                      {food.description}
                    </p>

                    <p className="mt-2 text-xs text-gray-400">
                      🏪 {food.restaurant}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-[#EDF0EA] pt-4">
                      <span className="text-lg font-black text-[#48634F]">
                        RM {food.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-400">
                        🕒 {food.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white py-20 text-center shadow-sm">
              <span className="text-6xl">🍽️</span>
              <h3 className="mt-5 text-xl font-black">No food found!</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try searching for another food or category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 rounded-full bg-[#48634F] px-6 py-3 text-sm font-bold text-white"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US */}

      <section id="about" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <img
            src={photo("photo-1555939594-58d7cb561ad1", 900)}
            alt="Delicious food selection"
            className="h-[350px] w-full rounded-[30px] object-cover shadow-lg"
            loading="lazy"
          />

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#D58DA5]">
              WHY FOODIEEXPRESS?
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight">
              Good Food Makes
              <span className="block text-[#D58DA5]">Every Day Better.</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              We believe everyone deserves delicious food without the hassle.
              FoodieExpress brings your favourite restaurants and meals
              together in one convenient place.
            </p>

            <div className="mt-7 space-y-5">
              {[
                ["🍱", "Wide Food Selection", "From local favourites to international cuisine."],
                ["⚡", "Quick & Easy Ordering", "Find your favourite food in just a few clicks."],
                ["❤️", "Customer First", "A convenient and enjoyable food ordering experience."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F6DDE5] text-2xl">
                    {icon}
                  </span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}

      <section className="px-5 py-12">
        <div className="mx-auto max-w-7xl rounded-[30px] bg-[#F6DDE5] px-6 py-12 text-center">
          <span className="text-4xl">💌</span>

          <h2 className="mt-4 text-3xl font-black text-[#354B3B]">
            Stay in the Foodie Loop!
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm text-[#806A73]">
            Get updates about special offers, delicious new arrivals and exclusive deals.
          </p>

          <form
            className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              showNotification("Thanks for subscribing!");
              e.currentTarget.reset();
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="min-w-0 flex-1 rounded-full border border-white bg-white px-6 py-4 text-sm outline-none focus:border-[#D58DA5]"
            />

            <button className="rounded-full bg-[#48634F] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#354B3B]">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#26382C] px-5 pb-8 pt-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-2xl font-black">
              Foodie<span className="text-[#E9AFC1]">Express</span> 🍴
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-300">
              Delicious food, delivered to you. Making every meal a little more special.
            </p>

            <p className="mt-5 text-xl">📸 📘 🎵</p>
          </div>

          <div>
            <h3 className="font-bold">Quick Links</h3>
            <div className="mt-5 space-y-3 text-sm text-gray-300">
              <a href="#" className="block hover:text-[#F6DDE5]">Home</a>
              <a href="#restaurants" className="block hover:text-[#F6DDE5]">Restaurants</a>
              <a href="#menu" className="block hover:text-[#F6DDE5]">Food Menu</a>
              <a href="#about" className="block hover:text-[#F6DDE5]">About Us</a>

              <button
                onClick={() => setAccountView("tracking")}
                className="block hover:text-[#F6DDE5]"
              >
                Track Order
              </button>

              <button
                onClick={openAccount}
                className="block hover:text-[#F6DDE5]"
              >
                My Account
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-bold">Food Categories</h3>

            <div className="mt-5 space-y-3 text-sm text-gray-300">
              {["Malaysian", "Burgers", "Japanese", "Pizza", "Drinks", "Desserts"].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    scrollToFood();
                  }}
                  className="block hover:text-[#F6DDE5]"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">Contact Us</h3>

            <div className="mt-5 space-y-3 text-sm text-gray-300">
              <p>📍 Malaysia</p>
              <p>📧 hello@foodieexpress.com</p>
              <p>📞 +60 12-345 6789</p>
              <p>🕒 Daily, 9 AM – 10 PM</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-7 text-center text-xs text-gray-400">
          © 2026 FoodieExpress. All Rights Reserved. Made with ❤️ for food lovers.
        </div>
      </footer>

      {/* ======================================
          CHECKOUT MODAL
      ====================================== */}

      {checkoutOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#26382C]/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[#FFFDF9] p-7 shadow-2xl">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#D58DA5]">
                  ALMOST THERE!
                </p>
                <h2 className="mt-2 text-2xl font-black">Checkout 🛍️</h2>
              </div>

              <button
                onClick={() => setCheckoutOpen(false)}
                className="rounded-full bg-[#EDF3EA] px-4 py-2"
              >
                ✕
              </button>
            </div>

            <form onSubmit={placeOrder} className="mt-7 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Full Name
                </label>

                <input
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[#DCE6D8] bg-white p-4 text-sm outline-none focus:border-[#D58DA5]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Email Address
                </label>

                <input
                  required
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-[#DCE6D8] bg-white p-4 text-sm outline-none focus:border-[#D58DA5]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Delivery Address
                </label>

                <textarea
                  required
                  rows="3"
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                  placeholder="Enter your complete delivery address"
                  className="w-full rounded-xl border border-[#DCE6D8] bg-white p-4 text-sm outline-none focus:border-[#D58DA5]"
                />
              </div>

              <div className="rounded-2xl bg-[#EDF3EA] p-5">
                <h3 className="font-bold">Order Summary</h3>

                {cart.map((item) => (
                  <div key={item.id} className="mt-3 flex justify-between gap-3 text-sm">
                    <span>{item.name} × {item.quantity}</span>
                    <span>RM {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}

                <div className="mt-4 border-t border-[#D5E0D1] pt-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>RM {subtotal.toFixed(2)}</span>
                  </div>

                  <div className="mt-2 flex justify-between text-sm">
                    <span>Delivery Fee</span>
                    <span>RM {deliveryFee.toFixed(2)}</span>
                  </div>

                  <div className="mt-4 flex justify-between text-lg font-black">
                    <span>Total</span>
                    <span className="text-[#48634F]">
                      RM {total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#E8EDE5] p-4">
                <p className="text-sm font-bold">Payment Method</p>
                <p className="mt-2 text-sm text-gray-500">
                  💵 Cash on Delivery (Demo)
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#48634F] py-4 font-bold text-white transition hover:bg-[#354B3B]"
              >
                Confirm Order · RM {total.toFixed(2)}
              </button>

            </form>
          </div>
        </div>
      )}

      {/* ======================================
          USER ACCOUNT & TRACKING MODAL
      ====================================== */}

      {accountView && (
        <div className="fixed inset-0 z-[85] flex items-center justify-center bg-[#26382C]/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#FFFDF9] p-6 shadow-2xl sm:p-9">

            {/* MODAL HEADER */}

            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#D58DA5]">
                  FOODIEEXPRESS
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  {accountView === "login" && "Welcome Back! 👋"}
                  {accountView === "register" && "Create Your Account ❤️"}
                  {accountView === "profile" && "My Account 👤"}
                  {accountView === "tracking" && "Track Your Order 🚚"}
                </h2>
              </div>

              <button
                onClick={() => setAccountView("")}
                className="rounded-full bg-[#EDF3EA] px-4 py-2"
              >
                ✕
              </button>
            </div>

            {/* LOGIN */}

            {accountView === "login" && (
              <form onSubmit={handleLogin} className="space-y-5">

                <p className="text-sm text-gray-500">
                  Login to manage your account and track your delicious orders.
                </p>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-[#DCE6D8] p-4 text-sm outline-none focus:border-[#D58DA5]"
                />

                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full rounded-xl border border-[#DCE6D8] p-4 text-sm outline-none focus:border-[#D58DA5]"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#48634F] py-4 font-bold text-white hover:bg-[#354B3B]"
                >
                  Login →
                </button>

                <p className="text-center text-sm text-gray-500">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setAccountView("register")}
                    className="font-bold text-[#D58DA5]"
                  >
                    Register here
                  </button>
                </p>
              </form>
            )}

            {/* REGISTER */}

            {accountView === "register" && (
              <form onSubmit={handleRegister} className="space-y-5">

                <p className="text-sm text-gray-500">
                  Join FoodieExpress and enjoy your favourite meals!
                </p>

                <input
                  name="name"
                  required
                  minLength="2"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-[#DCE6D8] p-4 text-sm outline-none focus:border-[#D58DA5]"
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-[#DCE6D8] p-4 text-sm outline-none focus:border-[#D58DA5]"
                />

                <input
                  name="password"
                  type="password"
                  required
                  minLength="6"
                  placeholder="Create Password (minimum 6 characters)"
                  className="w-full rounded-xl border border-[#DCE6D8] p-4 text-sm outline-none focus:border-[#D58DA5]"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#48634F] py-4 font-bold text-white hover:bg-[#354B3B]"
                >
                  Create Account →
                </button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setAccountView("login")}
                    className="font-bold text-[#D58DA5]"
                  >
                    Login
                  </button>
                </p>
              </form>
            )}

            {/* USER PROFILE */}

            {accountView === "profile" && currentUser && (
              <div className="space-y-6">

                <div className="flex items-center gap-4 rounded-2xl bg-[#EDF3EA] p-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F6DDE5] text-3xl">
                    👤
                  </div>

                  <div>
                    <h3 className="text-lg font-black">
                      {currentUser.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {currentUser.email}
                    </p>

                    <span className="mt-1 inline-block text-xs font-bold text-[#48634F]">
                      FoodieExpress Member ❤️
                    </span>
                  </div>
                </div>

                {/* EDIT PROFILE */}

                <form onSubmit={handleUpdateProfile} className="space-y-4">

                  <h3 className="font-black">Personal Information</h3>

                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Full Name
                    </label>

                    <input
                      name="name"
                      required
                      defaultValue={currentUser.name}
                      className="w-full rounded-xl border border-[#DCE6D8] p-4 text-sm outline-none focus:border-[#D58DA5]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Email Address
                    </label>

                    <input
                      value={currentUser.email}
                      disabled
                      className="w-full rounded-xl border border-[#DCE6D8] bg-gray-100 p-4 text-sm text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-bold">
                      Delivery Address
                    </label>

                    <textarea
                      name="address"
                      rows="3"
                      defaultValue={currentUser.address || ""}
                      placeholder="Your delivery address"
                      className="w-full rounded-xl border border-[#DCE6D8] p-4 text-sm outline-none focus:border-[#D58DA5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#48634F] py-3 font-bold text-white transition hover:bg-[#354B3B]"
                  >
                    Save Changes
                  </button>
                </form>

                {/* ORDER HISTORY */}

                <div className="border-t border-[#E8EDE5] pt-6">
                  <h3 className="mb-4 text-lg font-black">
                    My Order History
                  </h3>

                  {orders.filter(
                    (order) =>
                      order.email === currentUser.email
                  ).length > 0 ? (
                    <div className="space-y-3">

                      {orders
                        .filter(
                          (order) =>
                            order.email === currentUser.email
                        )
                        .map((order) => (
                          <div
                            key={order.id}
                            className="rounded-xl border border-[#E8EDE5] p-4"
                          >
                            <div className="flex flex-wrap justify-between gap-2">
                              <span className="font-bold text-[#48634F]">
                                #{order.id}
                              </span>

                              <span className="text-sm font-bold">
                                RM {order.total.toFixed(2)}
                              </span>
                            </div>

                            <p className="mt-2 text-xs text-gray-500">
                              {order.items.length} food item(s) · {order.date}
                            </p>

                            <p className="mt-2 text-xs font-bold text-[#D58DA5]">
                              {ORDER_STAGES[order.statusIndex]?.title}
                            </p>

                            <button
                              onClick={() => trackOrder(order)}
                              className="mt-3 text-sm font-bold text-[#D58DA5]"
                            >
                              View Order Status →
                            </button>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <p className="rounded-xl bg-[#EDF3EA] p-5 text-center text-sm text-gray-500">
                      You haven't placed any orders yet.
                      Start exploring our menu!
                    </p>
                  )}
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full rounded-xl border border-red-200 py-3 font-bold text-red-500 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            )}

            {/* TRACK ORDER */}

            {accountView === "tracking" && (
              <div>

                {activeOrder ? (
                  <>

                    <div className="rounded-2xl bg-[#EDF3EA] p-5">

                      <p className="text-xs font-bold text-gray-500">
                        ORDER NUMBER
                      </p>

                      <h3 className="mt-1 text-xl font-black text-[#48634F]">
                        #{activeOrder.id}
                      </h3>

                      <div className="mt-4 flex justify-between text-sm">
                        <span className="text-gray-500">Order Total</span>
                        <span className="font-black">
                          RM {activeOrder.total.toFixed(2)}
                        </span>
                      </div>

                      <div className="mt-2 flex justify-between gap-3 text-sm">
                        <span className="shrink-0 text-gray-500">
                          Delivery Address
                        </span>

                        <span className="max-w-[60%] text-right font-semibold">
                          {activeOrder.address}
                        </span>
                      </div>

                      <div className="mt-3 flex justify-between text-sm">
                        <span className="text-gray-500">Customer</span>
                        <span className="font-semibold">
                          {activeOrder.name}
                        </span>
                      </div>
                    </div>

                    {/* DELIVERY PROGRESS */}

                    <div className="my-8">
                      <h3 className="mb-6 text-lg font-black">
                        Delivery Progress
                      </h3>

                      {ORDER_STAGES.map((stage, index) => {
                        const completed =
                          index <= activeOrder.statusIndex;

                        const current =
                          index === activeOrder.statusIndex;

                        return (
                          <div
                            key={stage.title}
                            className="relative flex gap-4 pb-7 last:pb-0"
                          >

                            {index !== ORDER_STAGES.length - 1 && (
                              <div
                                className={`absolute left-[19px] top-11 h-full w-0.5 ${
                                  index < activeOrder.statusIndex
                                    ? "bg-[#48634F]"
                                    : "bg-gray-200"
                                }`}
                              />
                            )}

                            <div
                              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg ${
                                completed
                                  ? "bg-[#48634F] text-white"
                                  : "bg-gray-100 text-gray-400"
                              }`}
                            >
                              {completed ? "✓" : stage.icon}
                            </div>

                            <div>
                              <h4
                                className={`font-bold ${
                                  completed
                                    ? "text-[#48634F]"
                                    : "text-gray-400"
                                }`}
                              >
                                {stage.title}
                              </h4>

                              <p className="mt-1 text-xs text-gray-500">
                                {stage.description}
                              </p>

                              {current && (
                                <span className="mt-2 inline-block rounded-full bg-[#F6DDE5] px-3 py-1 text-[10px] font-bold text-[#A65F7B]">
                                  CURRENT STATUS
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* DELIVERY STATUS MESSAGE */}

                    <div className="rounded-xl border border-[#E8EDE5] bg-white p-4 text-center">
                      <span className="text-3xl">
                        {ORDER_STAGES[activeOrder.statusIndex]?.icon}
                      </span>

                      <h3 className="mt-2 font-black text-[#48634F]">
                        {activeOrder.statusIndex === 3
                          ? "Order Delivered!"
                          : ORDER_STAGES[activeOrder.statusIndex]?.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {ORDER_STAGES[activeOrder.statusIndex]?.description}
                      </p>
                    </div>

                    {/* ORDERED ITEMS */}

                    <div className="mt-5 rounded-xl border border-[#E8EDE5] p-4">
                      <h3 className="font-bold">Your Ordered Items</h3>

                      {activeOrder.items.map((item) => (
                        <div
                          key={item.id}
                          className="mt-3 flex justify-between gap-3 text-sm"
                        >
                          <span>
                            {item.name} × {item.quantity}
                          </span>

                          <span className="font-semibold">
                            RM {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="mt-5 text-center text-xs text-gray-400">
                      Demo tracking: delivery stages update automatically
                      every 15 seconds while this order is active.
                    </p>
                  </>
                ) : (
                  <div className="py-12 text-center">
                    <span className="text-6xl">🛵</span>

                    <h3 className="mt-5 text-xl font-black">
                      No Active Orders
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Place an order first to start tracking your delivery.
                    </p>

                    <button
                      onClick={() => setAccountView("")}
                      className="mt-6 rounded-full bg-[#48634F] px-7 py-3 font-bold text-white"
                    >
                      Explore Food
                    </button>
                  </div>
                )}

                <button
                  onClick={() =>
                    setAccountView(currentUser ? "profile" : "")
                  }
                  className="mt-6 w-full rounded-xl border border-[#DCE6D8] py-3 font-bold text-[#48634F]"
                >
                  {currentUser ? "Back to My Account" : "Close"}
                </button>

              </div>
            )}

          </div>
        </div>
      )}

      {/* ======================================
          NOTIFICATION
      ====================================== */}

      {notification && (
        <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-xl bg-[#354B3B] px-6 py-4 text-center text-sm font-bold text-white shadow-2xl">
          ✅ {notification}
        </div>
      )}

      {/* ======================================
          CART BACKDROP
      ====================================== */}

      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 z-50 bg-[#26382C]/40 backdrop-blur-sm"
        />
      )}

      {/* ======================================
          CART DRAWER
      ====================================== */}

      <div
        className={`fixed right-0 top-0 z-[60] flex h-full w-full max-w-md flex-col bg-[#FFFDF9] shadow-2xl transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b border-[#E8EDE5] p-6">
          <div>
            <h2 className="text-2xl font-black">Your Cart 🛒</h2>
            <p className="mt-1 text-xs text-gray-400">
              {cartCount} items in your cart
            </p>
          </div>

          <button
            onClick={() => setCartOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EDF3EA] text-xl hover:bg-[#F6DDE5]"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 space-y-5 overflow-y-auto p-6">

          {cart.length > 0 ? (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 border-b border-[#E8EDE5] pb-5"
              >

                <img
                  src={photo(item.image, 200)}
                  alt={item.name}
                  className="h-24 w-24 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="font-bold">{item.name}</h3>

                  <p className="mt-1 text-sm font-bold text-[#D58DA5]">
                    RM {item.price.toFixed(2)}
                  </p>

                  <div className="mt-3 flex items-center gap-3">

                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EDF3EA] font-bold"
                    >
                      −
                    </button>

                    <span className="font-bold">{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EDF3EA] font-bold"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-auto text-xs font-semibold text-[#C47D98]"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="text-7xl">🛍️</span>

              <h3 className="mt-5 text-xl font-black">
                Your cart is empty
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Looks like you haven't added any delicious food yet.
              </p>

              <button
                onClick={() => setCartOpen(false)}
                className="mt-6 rounded-full bg-[#48634F] px-7 py-3 font-bold text-white"
              >
                Explore Food
              </button>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-[#E8EDE5] bg-white p-6">

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>
                <span>RM {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Delivery Fee</span>
                <span>RM {deliveryFee.toFixed(2)}</span>
              </div>

              <div className="flex justify-between border-t border-[#E8EDE5] pt-4 text-lg font-black">
                <span>Total</span>
                <span className="text-[#48634F]">
                  RM {total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              onClick={openCheckout}
              className="mt-6 w-full rounded-xl bg-[#48634F] py-4 font-bold text-white shadow-lg transition hover:bg-[#354B3B]"
            >
              Proceed to Checkout →
            </button>

            <p className="mt-3 text-center text-xs text-gray-400">
              Secure and convenient ordering experience.
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
