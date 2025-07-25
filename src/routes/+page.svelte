<script lang="ts">
    /* ----------  DATA  ---------- */
    // image paths live in /static/images so we reference them directly
    const broken = "/images/broken.jpg";
    const fixed = "/images/fixed.jpg";
    const hall = "/images/hall.jpg";
    const potent = "/images/potent.jpg";


    // WhatsApp CTA config
    const phone = "27616475781"; // replace with your real number in intl format
    const message = "Hi Dante, I’d like to book a repair";
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    export const services = [
        {
            icon: "🧲",
            title: "Hall-Effect Joystick Upgrade",
            body: "Premium magnetic sensors that never wear out or drift.\nBoth sticks • ± 2 h • R 500-600",
        },
        {
            icon: "🔧",
            title: "Standard Potentiometer Swap",
            body: "Budget-friendly fix for casual gamers.\nOne stick • ± 1 h • R 300  \nBoth sticks • ± 1.5h • R 400",
        },
        {
            icon: "🎮",
            title: "Complete Joystick Module",
            body: "Broken or smashed stick? We fit a brand-new joy-stick module and recalibrate.\n± 1 h • from R 400",
        },
        {
            icon: "🎯",
            title: "Joy-Con Drift Repair",
            body: "Nintendo Switch Joy-Cons drift fix – contact us for pricing and availability.",
        },
    ];

    export const gallery = [
        { src: broken, label: "StickDrift" },
        { src: fixed, label: "Fixed" },
        { src: hall, label: "Hall Effect Module" },
        { src: potent, label: "Potentiometer Module" },
    ];

    export const testimonials = [
        {
            name: "Sipho M.",
            avatar: "https://randomuser.me/api/portraits/men/9.jpg",
            date: "2024-11-18",
            stars: 5,
            body: "Had stick drift on my PS5. Dante upgraded to Hall-effect sticks and it feels <strong>better than new</strong>. Whole job done while I browsed the mall.",
            likes: 22,
            replies: 2,
        },
        {
            name: "Kayla R.",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            date: "2025-02-03",
            stars: 5,
            body: "Went for the cheaper potentiometer swap on my Xbox pad. Saved cash and got it back in under an hour. Great service!",
            likes: 15,
            replies: 0,
        },
        {
            name: "Johan “Snipr” V.",
            avatar: "https://randomuser.me/api/portraits/men/24.jpg",
            date: "2025-04-08",
            stars: 5,
            body: "Competitive CoD player here – zero dead-zone and buttery-smooth aim after the upgrade. Highly recommend for serious gamers.",
            likes: 18,
            replies: 3,
        },
    ];
</script>



<!-- SERVICES (unchanged) -->
<section id="services" class="container my-5">
    <h2 class="fw-bold mb-4">Our Services</h2>
    <div class="row g-4">
        {#each services as s}
            <div class="col-md-3 col-sm-6">
                <article
                    class="p-4 bg-light rounded-3 h-100 service-card"
                    style="background:var(--color-bg-soft)"
                >
                    <div class="fs-2 mb-2">{s.icon}</div>
                    <h3 class="h6 fw-semibold mb-2">{s.title}</h3>
                    <p class="mb-0 white-space-pre-line">{s.body}</p>
                </article>
            </div>
        {/each}
    </div>
</section>

<!-- WHY CHOOSE US (unchanged) -->
<section class="container my-5">
    <h2 class="fw-bold mb-4">Why repair your controller with us?</h2>
    <ul class="list-unstyled fs-5 lh-lg">
        <li>
            ⚡ <strong>Same‑day turnaround</strong> – drop your controller, grab
            coffee, pick it up fixed.
        </li>
        <li>
            🛡️ <strong>6‑month workmanship warranty</strong> on every repair.
        </li>
        <li>
            🇿🇦 <strong>Local &amp; independent</strong> – supporting SA gamers since
            2022.
        </li>
    </ul>
</section>

<!-- GALLERY with overlay captions -->
<section id="gallery" class="container my-5">
    <h2 class="fw-bold mb-4">Gallery</h2>
    <div class="row g-3">
        {#each gallery as g}
            <div class="col-6 col-md-3">
                <div
                    class="gallery-item position-relative rounded-2 ratio ratio-1x1 overflow-hidden"
                    tabindex="0"
                >
                    <img
                        class="w-100 h-100 object-fit-cover gallery-img"
                        src={g.src}
                        alt={g.label}
                    />
                    <span class="overlay-text">{g.label}</span>
                </div>
            </div>
        {/each}
    </div>
</section>

<!-- TESTIMONIALS (kept commented out) -->

<!-- CONTACT -->
<section id="contact" class="container my-5">
    <h2 class="fw-bold mb-4">Book Your Repair</h2>
    <form
        class="row gy-3 mb-4"
        on:submit|preventDefault={() => alert("Thanks! We’ll confirm shortly.")}
    >
        <!-- <div class="col-12">
            <input
                class="form-control"
                placeholder="Name &amp; Surname"
                required
            />
        </div>
        <div class="col-12">
            <input
                class="form-control"
                type="email"
                placeholder="Email or WhatsApp Number"
                required
            />
        </div>
        <div class="col-12">
            <textarea
                class="form-control"
                rows="5"
                placeholder="Controller model &amp; issue"
                required
            ></textarea>
        </div> -->
        <div class="col-12 d-flex gap-3 justify-content-around ">
            <!-- <button class="btn btn-dark px-4" type="submit">Send</button> -->
            <!-- WhatsApp CTA -->
            <a
                class="btn btn-whatsapp d-flex align-items-center  gap-2 px-4"
                href={waLink}
                target="_blank"
                rel="noopener"
                aria-label="Chat on WhatsApp"
            >
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
                <span>WhatsApp Us</span>
            </a>
        </div>
    </form>
</section>

<style>
    /* hero & gallery effects */
    .hero-img {
        filter: grayscale(50%);
    }

    /* gallery item container */
    .gallery-item {
        cursor: pointer;
    }
    .gallery-item .overlay-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0.25rem 0.5rem;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        font-weight: 600;
        border-radius: 0.25rem;
        transition: opacity 0.25s;
    }

    .gallery-img {
        filter: grayscale(25%);
        transition:
            filter 0.25s,
            transform 0.25s;
    }

    /* hover / focus state */
    .gallery-item:hover .gallery-img,
    .gallery-item:focus-visible .gallery-img {
        filter: none;
        transform: scale(1.04);
    }

    .gallery-item:hover .overlay-text,
    .gallery-item:focus-visible .overlay-text {
        opacity: 0;
    }

    /* hero overlay */
    .hero-overlay {
        background: rgba(0, 0, 0, 0.55);
    }

    /* card hover */
    .service-card {
        transition: 0.15s;
    }
    .service-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.05);
    }

    /* line breaks in service descriptions */
    .white-space-pre-line {
        white-space: pre-line;
    }

    /* WhatsApp button */
    .btn-whatsapp {
        background: #25d366; /* brand green */
        color: #fff;
    }
    .btn-whatsapp:hover {
        background: #1ebe5d;
        color: #fff;
    }
</style>
