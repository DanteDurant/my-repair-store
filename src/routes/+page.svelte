<script lang="ts">
	/* ----------  DATA  ---------- */
    import hero from '/images/infernal-bg.jpg';
    import broken from '/images/broken.jpg';
    import fixed from '/images/fixed.jpg';
    import hall from '/images/hall.jpg';
    import potent from '/images/potent.jpg';

	const services = [
		{
			icon: '🧲',
			title: 'Hall-Effect Thumbstick Upgrade',
			body: 'Premium magnetic sensors that never wear out or drift.\nBoth sticks • ± 2 h • R 800'
		},
		{
			icon: '🔧',
			title: 'Standard Potentiometer Swap',
			body: 'Budget-friendly fix for casual gamers.\nLeft stick • ± 1 h • R 300  |  Both • R 400'
		},
		{
			icon: '🎮',
			title: 'Complete Joystick Module',
			body: 'Broken or smashed stick? We fit a brand-new joy-stick module and recalibrate.\n± 1 h • from R 400'
		},
		{
			icon: '🎯',
			title: 'Joy-Con Drift Repair',
			body: 'Nintendo Switch Joy-Cons drift fix – contact us for pricing and availability.'
		}
	];

	const gallery = [
		broken,
        fixed,
        hall,
        potent,
	];

	const testimonials = [
		{
			name: 'Sipho M.',
			avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
			date: '2024-11-18',
			stars: 5,
			body: 'Had stick drift on my PS5. Dante upgraded to Hall-effect sticks and it feels <strong>better than new</strong>. Whole job done while I browsed the mall.',
			likes: 22, replies: 2
		},
		{
			name: 'Kayla R.',
			avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
			date: '2025-02-03',
			stars: 5,
			body: 'Went for the cheaper potentiometer swap on my Xbox pad. Saved cash and got it back in under an hour. Great service!',
			likes: 15, replies: 0
		},
		{
			name: 'Johan “Snipr” V.',
			avatar: 'https://randomuser.me/api/portraits/men/24.jpg',
			date: '2025-04-08',
			stars: 5,
			body: 'Competitive CoD player here – zero dead-zone and buttery-smooth aim after the upgrade. Highly recommend for serious gamers.',
			likes: 18, replies: 3
		}
	];

    

</script>















<!-- HERO -->
<section class="position-relative container px-0 my-5">
	<img class="w-100 rounded-3 object-fit-cover hero-img" height="420"
	     src="{hero}"
	     alt="hell scape" />

	<div class="position-absolute top-0 start-0 w-100 h-100
	            d-flex flex-column justify-content-center align-items-center
	            text-center text-white rounded-3 hero-overlay">
		<h1 class="display-4 fw-bold mb-3">Say Goodbye to Stick Drift</h1>
		<p class="lead mb-4">
			Hall-effect upgrades and rapid repairs for PlayStation, Xbox and Switch
			controllers – expertly fitted while you shop.
		</p>
		<a class="btn btn-dark" href="#contact">Book a Slot</a>
	</div>
</section>















<!-- SERVICES -->
<section id="services" class="container my-5">
	<h2 class="fw-bold mb-4">Our Services</h2>
	<div class="row g-4">
		{#each services as s}
			<div class="col-md-3 col-sm-6">
				<article class="p-4 bg-light rounded-3 h-100 service-card"
				         style="background:var(--color-bg-soft)">
					<div class="fs-2 mb-2">{s.icon}</div>
					<h3 class="h6 fw-semibold mb-2">{s.title}</h3>
					<p class="mb-0 white-space-pre-line">{s.body}</p>
				</article>
			</div>
		{/each}
	</div>
</section>












<!-- WHY CHOOSE US -->
<section class="container my-5">
	<h2 class="fw-bold mb-4">Why Dante’s Infernal Repairs?</h2>
	<ul class="list-unstyled fs-5 lh-lg">
		<li>⚡ <strong>Same-day turnaround</strong> – drop your controller, grab coffee, pick it up fixed.</li>
		<li>🛡️ <strong>6-month workmanship warranty</strong> on every repair.</li>
		<!-- <li>💬 <strong>Plain-language advice</strong> – no tech jargon, just honest options &amp; prices.</li> -->
		<li>🇿🇦 <strong>Local &amp; independent</strong> – supporting SA gamers since 2022.</li>
	</ul>
</section>













<!-- GALLERY -->
<section id="gallery" class="container my-5">
	<h2 class="fw-bold mb-4">Gallery</h2>
	<div class="row g-3">
		{#each gallery as src}
			<div class="col-6 col-md-3">
				<img class="w-100 rounded-2 object-fit-cover ratio ratio-1x1 gallery-img"
				     src={src} alt="something interesting to look at" />
			</div>
		{/each}
	</div>
</section>













<!-- TESTIMONIALS
<section id="testimonials" class="container my-5">
	<h2 class="fw-bold mb-4">Testimonials</h2>
	{#each testimonials as t}
		<article class="d-flex gap-3 py-4 border-bottom">
			<img class="rounded-circle flex-shrink-0" width="56" height="56"
			     src={t.avatar} alt={t.name} />

			<div>
				<header class="d-flex flex-wrap gap-2 align-items-center mb-1">
					<strong>{@html t.name}</strong>
					<small class="text-muted">{t.date}</small>
				</header>

				<div class="text-warning lh-1 mb-2">{'★'.repeat(t.stars)}</div>
				<p class="mb-2">{@html t.body}</p>

				<footer class="d-flex gap-3 text-muted small">
					<span>👍 {t.likes}</span>
					<span>💬 {t.replies}</span>
				</footer>
			</div>
		</article>
	{/each}
</section> -->












<!-- CONTACT -->
<section id="contact" class="container my-5">
	<h2 class="fw-bold mb-4">Book Your Repair</h2>
	<form class="row gy-3"
	      on:submit|preventDefault={() => alert('Thanks! We’ll confirm shortly.')}>
		<div class="col-12">
			<input class="form-control" placeholder="Name &amp; Surname" required />
		</div>
		<div class="col-12">
			<input class="form-control" type="email"
			       placeholder="Email or WhatsApp Number" required />
		</div>
		<div class="col-12">
			<textarea class="form-control" rows="5"
			          placeholder="Controller model &amp; issue" required></textarea>
		</div>
		<div class="col-12">
			<button class="btn btn-dark px-4" type="submit">Send</button>
		</div>
	</form>
</section>














<style>
	/* hero & gallery effects */
	.hero-img    { filter:grayscale(50%); }
	.gallery-img { filter:grayscale(25%); transition:.25s; }
	.gallery-img:hover{ filter:none; transform:scale(1.04); }

	.hero-overlay{ background:rgba(0,0,0,.55); }

	/* card hover */
	.service-card{transition:.15s;}
	.service-card:hover{transform:translateY(-4px);box-shadow:0 .5rem 1rem rgba(0,0,0,.05);}

	/* line breaks in service descriptions */
	.white-space-pre-line{white-space:pre-line}
</style>