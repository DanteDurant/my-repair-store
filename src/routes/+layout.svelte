<script lang="ts">
	/* bring in your global CSS (which already @imports Bootstrap CSS) */
	import '../app.css';

	const links = [
		{ href: '#services',     label: 'Services'      },
		{ href: '#gallery',      label: 'Gallery'       },
		{ href: '#testimonials', label: 'Testimonials'  },
		{ href: '#contact',      label: 'Book Repair'   }
	];



</script>

<!-- NAVBAR -->
<nav class="navbar navbar-expand-lg bg-white border-bottom sticky-top">
	<div class="container d-flex justify-content-between align-items-center">
       <img src="/images/file.svg" alt="Dante’s Infernal Repairs logo" height="50" />
		<a class="navbar-brand fw-semibold d-flex align-items-center gap-2" href="/">
			Dante’s Infernal Repairs
		</a>

		<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#mainNav">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div id="mainNav" class="collapse navbar-collapse">
			<ul class="navbar-nav ms-auto gap-lg-4 mb-2 mb-lg-0">
				{#each links as l}
					<li class="nav-item"><a class="nav-link" href={l.href}>{l.label}</a></li>
				{/each}
			</ul>
			<a class="btn btn-dark ms-lg-4" href="#contact">Book&nbsp;Now</a>
		</div>
	</div>
</nav>

<main class="page">
	<slot />
</main>

<!-- FOOTER -->
<footer class="border-top py-4 mt-5">
	<div class="container d-flex flex-wrap justify-content-between align-items-center gap-3">
		<span class="text-muted small mb-0">
			© {new Date().getFullYear()} Dante’s Infernal Repairs • Johannesburg, SA
		</span>

		<div class="d-flex gap-3">
			<a aria-label="Twitter"   class="text-muted" href="#"><i class="bi bi-twitter"></i></a>
			<a aria-label="Instagram" class="text-muted" href="#"><i class="bi bi-instagram"></i></a>
		</div>
	</div>
</footer>

<style>
	/* narrow but visible underline on hover (optional) */
	.nav-link{position:relative}
	.nav-link::after{
		content:"";position:absolute;left:0;bottom:-4px;width:0;height:2px;
		background:#000;transition:width .2s
	}
	.nav-link:hover::after{width:100%}
</style>