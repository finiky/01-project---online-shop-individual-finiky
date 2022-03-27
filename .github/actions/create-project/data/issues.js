const issues = [
  {
    title: "Demo",
    body: `Perform a demonstration of the application you have just built.

This is a common formality in product teams, where they will demo their working software to the Product Manager in order to get feedback. Consider this demo to be for people that matter in your organisation.

Prefer to talk about how your product works from a customer perspective instead of talking about the code. Customers in this case include people who create the products in Stripe, as well as customers who buy things from the shop.

Your demo should follow the format below:

- Introduce the app and what it does from a high level
- Showcase all the features of the app:
  - Filter by dropdown
  - Sort by dropdown
  - Search bar
  - Pagination
- Demonstrate adding a new product in Stripe, and seeing it appear on the website

You will need to record your presentation as a screen recording, and attach a link to this GitHub issue. The easiest way to record is to create a Google Meet event, share your screen and use the built in recording feature. Ensure that the generated video file is accessible to everyone at Developers Institute.

## Acceptance criteria

- [ ] The demo follows the format listed above
- [ ] Link to presentation is attached to this GitHub issue
- [ ] The presentation file is accessible to anyone at Developers Institute
`,
  },
  {
    title: "Create a README",
    body: `All the projects you work on should have some form of documentation. This helps others understand what the application is, how it works, and how they can contribute.

Replace the existing \`README.md\` file with your own documentation.

Write Markdown to format your text nicely. Read [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) to see how you can markup your plain text using the markdown syntax.

Ensure your README.md covers all the items in the acceptance criteria.

## Acceptance criteria

- [ ] Overview of what the product is, with a screenshot of how it looks.
- [ ] Lists the dependencies of the app, such as Stripe and Begin
- [ ] Includes instructions for how to use the app for development:
  - What needs to be installed on the developer's computer to run this application (e.g Node)
  - What terminal commands need to be run to get the app up and running (e.g \`npm install\`)
- [ ] Includes links to the deployed applications:
  - Begin
  - Netlify`,
  },
  {
    title: "Deploy Application to Netlify",
    body: `Watch the [Deploying a React App on Netlify](https://www.loom.com/share/5e5dc383d61647c1a2b5a4661e80fcd9) tutorial

## Acceptance criteria

- [ ] Application is deployed to Netlify
- [ ] Link to application is included in the README`,
  },
  {
    title: "Code review Pagination feature",
    body: `Your team mate has created a feature, and it's ready for you to review. You will need to open the Pull Request attached as a comment to this issue, and review the code provided, completing the Pull Request checklist.

Listed below are the requirements for the feature, which you can use in your code review to ensure the feature works as expected.

## Acceptance criteria

- [ ] The product should only display 6 products at any one time
- [ ] A pagination menu should be displayed under the products, that matches the number of available pages
- [ ] When one of the links are clicked from the pagination menu, the next page of products are displayed`,
  },
  {
    title: "Implement Search",
    body: `Watch the [Getting started on the product search component](https://www.loom.com/share/b522853c33764330a63fba34b5151eee) tutorial.

You will be working with the files inside \`src/components/Search/Search\`.

Complete the \`Search.jsx\` component to include a text input, where users can enter search terms. You will need to design the component by adding CSS into \`Search.css\`. Whenever the value of the text input changes, you will need to call the \`setSearchPrefix\` and pass in the value.

You will also need to complete the \`getProductsBySearch\` function. This function has two parameters, a list of products and the search term typed into the box. You need to filter the \`products\` array, to only return products where the name includes the search term. If the search term is an empty string, you will need to return all the products

You will need to plan and execute tests inside \`test/getProductsBySearch.test.js\`. Your tests should ensure that the above requirements are working as expected. You can run tests by typing \`npm run test:search\` in your terminal. An array of example products, and test names, have been provided for you.

## Acceptance criteria

- [ ] A text input is added to the page, when a customer enters two or more letters, the product list only displays products whose name includes the characters entered in the search input
- [ ] The text input is displayed nicely on the page, with custom CSS
- [ ] If the text input is cleared, all the products are displayed
- [ ] Automated tests are written for the \`getProductsBySearch\` function
- [ ] All the automated tests for this component pass. You can run tests by typing \`npm run test:search\` in your terminal
- [ ] Your code has been reviewed by one of your team members before it's merged. The GitHub Pull Request is attached as a comment in this GitHub issue.`,
  },
  {
    title: "Fetch products and prices from API",
    body: `1. Open \`./src/services/getProducts\`
2. Inside the \`getProducts\` function, make fetch requests to your API server to get the products and prices for your online shop

## Acceptance criteria

- [ ] The products and prices are loaded from the Stripe API, and displayed on your web page
- [ ] The URL is read from the \`REACT_APP_API_URL\` environment variable`,
  },
  {
    title: "Set up Stripe API server",
    body: `Watch the tutorial on [Setting up a Stripe API server on Begin.com](https://www.loom.com/share/42028701a940476d953dd210a341ca9c)

1. Create an account at [Begin.com](http://begin.com/), using GitHub to authenticate
2. Go to the [Begin with Stripe](https://github.com/lwcooper/begin-with-stripe) GitHub Repository. It is a template for setting up an API that will talk to Stripe.
3. Click the "Deploy to Begin" button, and follow the prompts to set the app up in the \`Developers Institute Classrooms\` organisation. If you need help with this, please contact your instructor.
4. Once your app is deployed, add the following environment variables to the Staging application:
    - \`REDIRECT_TO\` set to \`http://localhost:3000\`
    - \`STRIPE_SECRET_KEY\` set to the secret key provided by Stripe. **Important:** treat this key like a password to your Facebook account. **DO NOT SHARE IT IN SLACK, OR PUT IT IN GITHUB.**. It's called a secret on purpose!
5. Verify your app works, by clicking on the Staging link, and adding \`/products\` to the end. You should see a list of your products from Stripe.
6. Take your app URL, and add it to the \`.env\` file in this repository, under the \`REACT_APP_API_URL\` variable.

## Acceptance criteria

- [ ] The _Begin with Stripe_ application is deployed and accessible with a URL
- [ ] The following environment variables for staging are configured in the Begin app:
  - \`REDIRECT_TO\` is set to \`http://localhost:3000\`
  - \`STRIPE_SECRET_KEY\`
- [ ] The staging URL from the Begin application is added to the \`REACT_APP_API_URL\` variable in the \`.env\` file`,
  },
  {
    title: "Create products in Stripe",
    body: `Watch the [Adding products in Stripe](https://www.loom.com/share/16e40fb713554338adeedc72cc3eaefb) tutorial

## Acceptance criteria

- [ ] At least 20 products are created in Stripe
- [ ] Each product has the category set in the \`metadata\`
- [ ] Each product has a one time price associated with it`,
  },
  {
    title: "Setup Stripe Account",
    body: `Follow the tutorial for setting up a new Stripe account: [Setup a Stripe account](https://www.loom.com/share/0fec179f030f464788784035d37b8f2a)

1. Sign up for an account on [Stripe.com](https://stripe.com/nz). Use your Developers Institute email address.
2. Verify your email address
3. Create a test store, and ensure you can see the API Keys

## Acceptance criteria

- [ ] A Stripe account is created, and every team member can access it with their own email addresses
- [ ] The Stripe public key is added to the \`REACT_APP_STRIPE_PUBLIC_KEY\` variable in the \`.env\` file`,
  },
  {
    title: "Shop design and CSS",
    body: `Implement a design for your shop using CSS. You should add your styles into \`src/App.css\`

The shop has a list of example products which you can use until your Stripe account is working correctly.

## Acceptance criteria

- [ ] The shop has a unique design
- [ ] The design is responsive and works across all screen resolutions
- [ ] CSS Grid is used for the page layout`,
  },
  {
    title: "Planning",
    body: `## Deciding on what to sell

Choose the type of product you want to sell on your online shop. Think about how you will source content and images. Once you have decided what you will sell, move onto the rest of this issue.
    
## Understanding the project

Read through each of the GitHub issues in the To Do column. For every ticket, ensure you understand what is being asked of you. It is your responsibility to ensure you understands every ticket.

Feel free to pull in an instructor if the requirements are not clear. It's vital that you understand what is being asked of you.

In particular, identify if any tickets depend on each other. For example, you need to create a Stripe account before you can add products to the Stripe account.

## How to work on issues

Now you know what the project is, and what items you will be selling, it's time to get started.

The backlog is in priority order. You should complete the issues at the top of the column before starting any more issues. Never start a new issue before completing the previous issue. That means you should **never** have more than one issue in progress at a time.

In summary:

- You should only ever be working on one issue at a time
- Finish an issue before starting a new issue
- Start with the issues at the top of the column first. Do not re-prioritise them.

## Acceptance criteria

- [ ] You know what product you are selling
- [ ] You have one issue _In Progress_`,
  },
  {
    title: "Team formation",
    body: `You will need to imagine you are working as part of a team for this project. A lot of the practices we follow will geared towards the processes you use in a team. One of the most important one is coming up with working agreements. You will need to go through this exercise, imagining you are on a team, and also using it to hold your self accountable for how you will work this week.
    
Part of this team formation exercise will include applying knowledge from the Treaty of Waitangi.

The [Principles of the Treaty of Waitangi – ngā mātāpono o te tiriti](https://teara.govt.nz/en/principles-of-the-treaty-of-waitangi-nga-matapono-o-te-tiriti) should be applied to how your team works together for this project.

### Participation

Acknowledges sovereignty/governance. Ensure there is equal participation for each member of your team. Ensure everyone has input into decisions that directly affect them. Decide how you will ensure that each team member has equal participation. For example, a working agreement that ensures all code is reviewed by all team members before being merged.

### Protection

Acknowledges the protection of rights, benefits and, possessions. Each of your team members should have their Tikanga (culture and protocols) and Taonga (treasures) such as Te Reo Māori respected and given equal footing to the Tikanga and Taonga of other cultures. For example, you might run a morning prayer or Karakia, a standup, or other Tikanga.

### Partnership

Acknowledges sovereignty/governance and working together with the same rights and benefits as subjects of the Crown. This can be applied to your team by working together in partnership. Each team member should have a say in how the team performs. If you are making a decision that affects other people, they should have a say in the decision. For example, you might have a daily planning meeting where you divide up the work, ensuring that each team member has input into the tasks they will be working on.

Run the following workshop to decide on your team working agreements:

## Working agreements

Taking the above principles into consideration, brainstorm five working agreements that a software team you work in could follow.

## Acceptance Criteria

\`WORKING_AGREEMENTS.md\` file exists in the project, and includes the following:

- [ ] List of at least 5 agreements.
- [ ] Actions reflect the principals from the Treaty of Waitangi, such as partnership, participation, and protection`,
  },
];

module.exports = {
  issues,
};
