/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Operating Systems',
    date: 'CST 334',
    firstParagraph: `What it is: Students will learn what is operating system and its design, how operating  systems manage process, memory, files and concurrency of running applications. 
                    The course will focus on Linux OS. Also students will learn Linux command lines, shell scripts, and to build software with GNU utilities. 
                    Then the students will have some understanding of how virtual machines works, for example virtualization and cloud computing.`,
    secondParagraph: `Why it is Important: Knowing how the memory and peripheral resources are managed will help us to write more efficient software. Learning Linux OS is needed for embedded system software engineer. `,
    button: `Previous Syllabus`
  },
  {
    title: 'Internet Programming (PHP)',
    date: 'CST 336',
    firstParagraph: `What it is: The world runs off the internet; therefore, CST 336 Internet Programming will teach students how to develop for the internet. Students will learn how to develop dynamic web applications, a web pages that update consistently and displays data in real time. To achieve this, students will have to learn how to communicate with databases; external servers, via RESTful web services and other Web APIs; and write scripts to display data from their own servers, generally using PHP.`,

    secondParagraph: `Why it is Important: Internet programming is extremely important because most of the services we use to communicate with the internet in one way or another. Also, known as the Internet of Things (IoT). As future software engineers we need to be ready to communicate with servers and databases to build useful tools. For example, if I wanted to build a weather application it would be practical to pull real-time weather data from an API rather than to build a network of weather equipment.`,
  },
  {
    title: 'Database Management (MySQL)',
    date: 'CST 363',
    firstParagraph: `What is it: The Database Management (CST 363) course at CSUMB will teach students how to effectively maintain  a database, how to work with a database (read/write), learn multiple database technologies, and gain some hands on experience with algorithms and data structures (i.e., learn why algorithms and data structures are important). `,

    secondParagraph: `Why is it important: Database Management is extremely important because databases are essentially why many services exist and function the way they do. For example, banks without a database would not be able to store customer information and much less how much money they have with the bank. A well managed Database ensure the data is safe and secure and can be accessed efficiently.  
    `,
  },
  {
    title: 'Computer Networking',
    date: 'CST 311',
    firstParagraph: `What it is: It is a study of the fundamentals of telecommunication and Data Communication. It will cover Local Area Network, Wide Area Network, Internet and internetworking protocols including TCP/IP. Then network security and performance will be discussed. The trends of network industry such as voice over the network and high speed networking will be discussed as well.`,

    secondParagraph: `Why it is important: Knowing how computers/devices are networked will help us to decide what kind of networks we will choose for the software projects. It is especially important for network security engineer.`,
  },

  {
    title: 'Race, Gender, Class in the Digital World',
    date: 'CST 462',
    firstParagraph: `What it is: Students will explore the inclinations, prejudices and accessibility of information technology for different race, gender, class and location. After identifying the issues, Students will develop a short and long term technology related activities to address the issues. Then students will implement the activities in their local communities through a volunteer 30 hour service.`,

    secondParagraph: `Why it is important: To prepare ourselves to be an ethical technical professional with social awareness and responsibility. `,
  },

  {
    title: 'Algorithms (C++ or Java)',
    date: 'CST 370',
    firstParagraph: `ERROR`,

    secondParagraph: `404 NOT FOUND `,
  },

  {
    title: 'Software Design (Java)',
    date: 'CST 338',
    firstParagraph: `ERROR`,

    secondParagraph: `404 NOT FOUND `,
  },

  {
    title: 'Software Engineering',
    date: 'CST 438',
    firstParagraph: `What it is: A course for preparing students to use principles and techniques for the development of large-scale software.  The course will review software process, requirements analysis and specification, software design, implementation, testing, and project management.  Also, students will be working in teams to produce a working viable product by the end of this course. 
    `,

    secondParagraph: `Why it is important: Learning to design and implement software with a team will develop real-life work skills.  Software development is a team effort, and with the study of project management, this class will help students utilize their personal techniques, along with using principles of software development. `
  },

  {
    title: 'Data Science',
    date: 'CST 383',
    firstParagraph: `What it is:  A course in data science is applying data analysis and machine learning techniques to illustrate data, read trends, and make educated predictions. In this course students will learn how to obtain data, preprocess it, apply machine learning methods, and display the results in a visual fashion. Students will learn the 5 stages of the data science life cycle: capture, maintain, process, analyze, and communicate data. `,

    secondParagraph: `Why this is important: Learning how to extract meaning out of data and interpreting that data requires both tools and knowledge in statistics and machine learning.  Data science is streamlined to be the future of artificial intelligence; as machine learning is used to make predictions, discover patterns, and predict analytics.`
  },


];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
    <div class="article">
      <h2>{title of the article}</h2>
      <p class="date">{date of the article}</p>
      {three separate paragraph elements}
      <span class='expandButton'></span>
    </div>
  Hint: You will need to use createElement more than once here!
  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.
  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.
  Step 3: return the entire component.
  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.
  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible
*/

//defines articles
const articles = document.querySelector('.articles')
console.log(articles)

data.map((item)=> {
  console.log('item', item)
  articles.appendChild(createArticle(item));
  
})  

function createArticle(arg) {
  //define new elements 
  const article = document.createElement('div')
  const articleTitle = document.createElement('h2')
  const articleDate = document.createElement('p')
  const firstP = document.createElement('p')
  const secondP = document.createElement('p')
  const thirdP = document.createElement('p')
  const button = document.createElement('button')
  const expand = document.createElement('span')

  //set textContent 
  expand.textContent = 'expand'
  articleTitle.textContent = arg.title 
  articleDate.textContent = arg.date
  firstP.textContent = arg.firstParagraph
  secondP.textContent = arg.secondParagraph
  thirdP.textContent = arg.thirdParagraph
  button.textContent = arg.button



  //setup structure of elements 
  article.appendChild(articleTitle)
  article.appendChild(articleDate)
  article.appendChild(firstP)
  article.appendChild(secondP)
  article.appendChild(thirdP)
  article.appendChild(button)
  article.appendChild(expand)

  //set class names 
  article.classList.add('article')
  articleDate.classList.add('date')
  article.classList.add('button')
  expand.classList.add('expandButton')
  


  //span event
  expand.addEventListener('click', () => {
    article.classList.toggle('article-open')
  })

  return article

}


