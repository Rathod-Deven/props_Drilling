import React from 'react'
import Card from './componets/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6cGhTlzp4dH_486xMiJHoyi1w7tx-nxKLL8mBFMMaQQ&s",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVByitatwVy2dZAVZOj2VNNhuoWzNrRZbBOfORmn5nzg&s",
    name: "Apple",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgIpwOvOEBLHGvkl3Nv-9ZlAYyxFDDu68yVdXREoQMq7MeCcQmMj1oSq3&s=10",
    name: "Netflix",
    datePosted: "3 weeks ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSj2Hsr3xsVHeGAuw-PYsVahcRDcb5Ity3kNW7J3lPg&s",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r5Pp8196JW12Uxw4kiUZbcUEFFmoaJgQgNesHKkUCmbF9BlWturF2c0&s=10",
    name: "Uber",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$58/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxDbGWS5_ZukEOuxyL-U1UE3JkQDIeTNaA6DfDim8Yy1oC6V1po5laBJI&s=10",
    name: "Adobe",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$48/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png",
    name: "Salesforce",
    datePosted: "10 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/3840px-Nvidia_logo.svg.png",
    name: "NVIDIA",
    datePosted: "2 days ago",
    post: "Software Engineer Intern",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$30/hr",
    location: "Bangalore, India",
  },
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
          <Card company={elem.name} post={elem.post} logo={elem.brandLogo} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  )
}

export default App