<script lang="ts">
    import "../app.css";
    import logo from "/images/file.svg?raw";
    import { browser } from "$app/environment";
    import { writable } from "svelte/store";
    const logowhite = "/images/logo-white.png";
    const logoblack = "/images/logo-black.png";

    const hero = "/images/infernal-bg.jpg";
    const heaven = "/images/heaven.jpg";

    /* ──────────────────────────────────────────────
     1 – Theme store (browser-safe)
  ─────────────────────────────────────────────── */
    export const theme = writable<"dark" | "light">("dark");

    if (browser) {
        // initial value from localStorage
        const saved = localStorage.getItem("theme") ?? "dark";
        document.documentElement.dataset.theme = saved;
        theme.set(saved);

        // keep <html data-theme="…"> & localStorage in sync
        theme.subscribe((v) => {
            document.documentElement.dataset.theme = v;
            localStorage.setItem("theme", v);
        });
    }

    function toggleTheme() {
        console.log("Toggle theme");
        theme.update((t) => (t === "dark" ? "light" : "dark"));
    }

    /* ──────────────────────────────────────────────
     2 – Navbar links
  ─────────────────────────────────────────────── */

    // WhatsApp CTA config
    const phone = "27616475781"; // replace with your real number in intl format
    const message = "Hi Dante, I’d like to have my controller repaired";
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
</script>

<!-- NAVBAR -->
<nav
    class="navbar navbar-expand-lg border-bottom sticky-top w-1"
    style="background:var(--color-bg-soft)"
>
    <div class="container">
        <!-- left side: brand + toggle sit in a row -->

        <div
            class="collapse navbar-collapse d-flex justify-content-between align-items-center wrap row"
        >
            <a
                class="navbar-brand d-flex align-items-center gap-2 m-0 p-0 col"
                href="/"
                style="color:var(--color-text)"
            >
                <!-- inline SVG -->
                <img
                    src={$theme === "light" ? logoblack : logowhite}
                    alt="Dante’s Infernal Repairs logo"
                    class="brand-logo"
                    width="100"
                    height="100"
                />

                <h1 class="main-heading">LevelUp Controllers</h1>
            </a>

            <div
                class="d-flex justify-content-end align-items-center gap-3 col"
            >
                <button
                    class="theme-toggle col"
                    class:light={$theme === "light"}
                    on:click={toggleTheme}
                    aria-label="Toggle colour theme"
                >
                    <!-- Sun image -->
                    <img
                        class="icon sun"
                        src="/images/greek-sun.png"
                        alt="Light-mode icon"
                        width="48"
                        height="48"
                    />

                    <!-- Moon image -->
                    <img
                        class="icon moon"
                        src="/images/moon.png"
                        alt="Dark-mode icon"
                        width="48"
                        height="48"
                    />
                </button>
                <a
                    class="btn btn-whatsapp d-flex align-items-center justify-content-around gap-2 col"
                    href={waLink}
                    target="_blank"
                    rel="noopener"
                    aria-label="Chat on WhatsApp"
                >
                    <div >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-whatsapp"
                            viewBox="0 0 16 16"
                        >
                            <path
                                d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
                            />
                        </svg>
                        <span>WhatsApp</span>
                    </div>
                </a>

                <a class="btn btn-dark ms-lg-3 col" href="#contact">Contact us</a>
            </div>
        </div>
    </div>
</nav>

<!-- HERO -->
<section class="position-relative container px-0 my-5">
    <img
        class="w-100 rounded-3 object-fit-cover hero-img"
        height="420"
        src={$theme === "light" ? heaven : hero}
        alt="Infernal background"
    />

    <div
        class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center text-white rounded-3 hero-overlay"
    >
        <h1 class="display-4 fw-bold mb-3">Say Goodbye to Stick Drift</h1>
        <p class="lead mb-4">
            Hall‑effect upgrades and rapid repairs for PlayStation, Xbox and
            Switch controllers – expertly fitted while you shop.
        </p>
        <!-- <a class="btn btn-dark" href="#contact">Book a Slot</a> -->
    </div>
</section>

<main><slot /></main>

<!-- FOOTER -->
<footer class="border-top py-4 mt-5" style="background:var(--color-bg-soft)">
    <div
        class="container d-flex flex-wrap justify-content-between align-items-center gap-3"
    >
        <span class="small mb-0" style="color:var(--color-text-muted)">
            © {new Date().getFullYear()} LevelUp Controllers • Cape Town -
            Durbanville.
        </span>
    </div>
</footer>

<style>
    .nav-link {
        position: relative;
    }
    .nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 0;
        height: 2px;
        background: var(--color-accent);
        transition: width 0.2s;
    }
    .nav-link:hover::after {
        width: 100%;
    }

    .logo {
        margin-top: -10px;
        margin-bottom: -10px;
        width: 100px;
        height: 100px;
        fill: red !important;
    }

    .main-heading {
        margin-top: 5px;
        font-size: 2.2rem;
        font-weight: 700;
        color: var(--color-text);
    }

    .brand-logo {
        display: block;
        width: 100px;
        height: auto;
        object-fit: contain;
    }

    .theme-toggle {
        max-width: 64px;
        height: 64px;
        border: none;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--color-bg-soft);
        color: var(--color-accent);
        cursor: pointer;
        perspective: 600px;
        transition: background 0.3s;
    }
    .theme-toggle .icon {
        position: absolute;
        transition:
            transform 0.6s ease,
            opacity 0.3s ease;
        transform-origin: center;
    }
    .theme-toggle .sun {
        transform: rotateY(0deg);
        opacity: 1;
    }
    .theme-toggle .moon {
        transform: rotateY(-180deg);
        opacity: 0;
    }

    .theme-toggle.light .sun {
        transform: rotateY(180deg);
        opacity: 0;
    }
    .theme-toggle.light .moon {
        transform: rotateY(0deg);
        opacity: 1;
    }

    .theme-toggle:hover {
        background: color-mix(
            in srgb,
            var(--color-bg-soft) 70%,
            var(--color-accent) 30%
        );
    }

    .btn-whatsapp {
        background: #25d366; /* brand green */
        color: #fff;
    }
    .btn-whatsapp:hover {
        background: #1ebe5d;
        color: #fff;
    }
</style>
