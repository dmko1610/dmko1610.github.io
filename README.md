# styles-practicing
Css project where I will write some code from Udemy course

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>uHost</title>
    <link rel="shortcut icon" href="favicon.png" />
    <link
      href="https://fonts.googleapis.com/css?family=Anton"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="main.css" />
  </head>

  <body>
    <header class="main-header">
      <div>
        <a href="index.html" class="main-header__brand"> uHost </a>
      </div>
      <nav class="main-nav">
        <ul class="main-nav__items">
          <li class="main-nav__item">
            <a href="packages/index.html">Packages</a>
          </li>
          <li class="main-nav__item">
            <a href="customers/index.html">Customers</a>
          </li>
          <li class="main-nav__item main-nav__item--cta">
            <a href="start-hosting/index.html">Start Hosting</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="product-overview">
        <h1>Get the freedom you deserve.</h1>
      </section>
      <section id="plans">
        <h1 class="section-title">Choose Your Plan</h1>
        <div>
          <article class="plan">
            <h1>FREE</h1>
            <h2>$0/month</h2>
            <h3>For hobby projects or small teams.</h3>
            <ul>
              <li>1 Workspace</li>
              <li>Unlimited Traffic</li>
              <li>10GB Storage</li>
              <li>Basic Support</li>
            </ul>
            <div>
              <button>CHOOSE PLAN</button>
            </div>
          </article>
          <article class="plan plan-highlighted">
            <h1 class="plan__annotation">RECOMMENDED</h1>
            <h1>PLUS</h1>
            <h2>$29/month</h2>
            <h3>For ambitious projects.</h3>
            <ul>
              <li>5 Workspaces</li>
              <li>Unlimited Traffic</li>
              <li>100GB Storage</li>
              <li>Plus Support</li>
            </ul>
            <div>
              <button>CHOOSE PLAN</button>
            </div>
          </article>
          <article class="plan">
            <h1>PREMIUM</h1>
            <h2>$99/month</h2>
            <h3>Your enterprise solution.</h3>
            <ul>
              <li>10 Workspaces</li>
              <li>Unlimited Traffic</li>
              <li>Unlimited Storage</li>
              <li>Priority Support</li>
            </ul>
            <div>
              <button>CHOOSE PLAN</button>
            </div>
          </article>
        </div>
      </section>
    </main>
  </body>
</html>
