<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import logo from "$lib/images/file.svg?raw";
    import sun from "$lib/images/greek-sun.png";
    import moon from "$lib/images/moon.png";

    /* ──────────────────────────────────────────────
	   1 – Bootstrap Collapse (client-only)
	────────────────────────────────────────────── */
    // onMount(() => {
    //     if (browser) import("bootstrap/js/dist/collapse");
    // });

    /* ──────────────────────────────────────────────
	   2 – Theme toggle logic
	────────────────────────────────────────────── */
    import { writable } from "svelte/store";

    const stored = browser ? localStorage.getItem("theme") : null;
    export const theme = writable(stored ?? "dark");

    // keep <html data-theme="…"> in sync
    theme.subscribe((v) => {
        if (browser) {
            document.documentElement.dataset.theme = v;
            localStorage.setItem("theme", v);
        }
    });

    function toggleTheme() {
        theme.update((t) => (t === "dark" ? "light" : "dark"));
    }

    /* ──────────────────────────────────────────────
	   3 – Navbar links
	────────────────────────────────────────────── */
    const links = [
        { href: "#services", label: "Services" },
        { href: "#gallery", label: "Gallery" },
        { href: "#testimonials", label: "Testimonials" },
        { href: "#contact", label: "Book Repair" },
    ];
</script>

<!-- NAVBAR -->
<nav
    class="navbar navbar-expand-lg border-bottom sticky-top"
    style="background:var(--color-bg-soft)"
>
    <div class="container">
        <!-- left side: brand + toggle sit in a row -->

<a class="navbar-brand d-flex align-items-center gap-2"
   href="/" style="color:var(--color-text)">
  <!-- inline SVG -->
  <svg class="brand-logo" width="72" height="72"
       viewBox="0 0 24 24" fill="currentColor">
    {@html logo}<!-- ensure each <path> has no hard-coded fill -->
  </svg>

  <h1 class="heading-main">
      Dante’  s Infernal Repairs

  </h1>
</a>

        <button
            class="theme-toggle ms-5 ps-5 {$theme === 'light' ? 'light' : ''}"
            on:click={toggleTheme}
            aria-label="Toggle colour theme"
        >
            <!-- Sun image -->
            <img
                class="icon sun"
                src={sun}
                alt="Light-mode icon"
                width="48"
                height="48"
            />

            <!-- Moon image -->
            <img
                class="icon moon"
                src={moon}
                alt="Dark-mode icon"
                width="48"
                height="48"
            />
        </button>

        <div id="mainNav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto gap-lg-4 mb-2 mb-lg-0">
                {#each links as l}
                    <li class="nav-item">
                        <a class="nav-link" href={l.href}>{l.label}</a>
                    </li>
                {/each}
            </ul>
            <a class="btn btn-dark ms-lg-3" href="#contact">Book Now</a>
        </div>
    </div>
</nav>

<main><slot /></main>

<!-- FOOTER -->
<footer class="border-top py-4 mt-5" style="background:var(--color-bg-soft)">
    <div
        class="container d-flex flex-wrap justify-content-between align-items-center gap-3"
    >
        <span class="small mb-0" style="color:var(--color-text-muted)">
            © {new Date().getFullYear()} Dante’s Infernal Repairs • Johannesburg,
            SA
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

    .heading-main {
        letter-spacing: -2px;
        font-family: 'Perpetua', serif;


    }

    .theme-toggle {
        width: 44px;
        height: 44px;
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


</style>
