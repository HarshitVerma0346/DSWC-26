import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
  {
    id: 1,
    companyLogo: "https://imgs.search.brave.com/PsanueEp7SAOLA61KB6mvn29FjQGyN3H1sHFQvaQdlw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/MTk1LzQyOS9zbWFs/bC9uZXctZ29vZ2xl/LWxvZ28tcm91bmRl/ZC1zcXVhcmUtdHJh/bnNwYXJlbnQtYmFj/a2dyb3VuZC1mcmVl/LXBuZy5wbmc",
    companyName: "Google",
    posted: "2 days ago",
    jobRole: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payRate: 35,
    location: "Mumbai, India",
  },
  {
    id: 2,
    companyLogo: "https://imgs.search.brave.com/ODyQdfJ7pQZAH7ROsmWW6WVln0wDUg6LGfsWA59riAg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDY4MTA4/NTcucG5n",
    companyName: "Microsoft",
    posted: "5 days ago",
    jobRole: "React Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payRate: 50,
    location: "Bangalore, India",
  },
  {
    id: 3,
    companyLogo: "https://imgs.search.brave.com/wCsXkphbgTVitOK7NR_O8ZwD54_tPmUxKCDNQ7XMQY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/NDk3ODE2LnBuZz9m/PXdlYnAmdz0xMjg",
    companyName: "Amazon",
    posted: "1 day ago",
    jobRole: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payRate: 40,
    location: "Hyderabad, India",
  },
  {
    id: 4,
    companyLogo: "https://imgs.search.brave.com/wy5AwQuJ4OPQDQD3Obzm_IA-GVfWL0ikd3LVY2t26_8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxMS9zbWFs/bC9uZXRmbGl4LWxv/Z28tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1mcmVlLXBuZy5w/bmc",
    companyName: "Netflix",
    posted: "3 days ago",
    jobRole: "Backend Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    payRate: 55,
    location: "Pune, India",
  },
  {
    id: 5,
    companyLogo: "https://imgs.search.brave.com/T5HE0uAi0zXg2Rf45GC-AJV0ZtPuKaBi3aOjNmRiIaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
    companyName: "Adobe",
    posted: "7 days ago",
    jobRole: "Product Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payRate: 32,
    location: "Delhi, India",
  },
  {
    id: 6,
    companyLogo: "https://imgs.search.brave.com/TmkqYeWdW04J2W0Phq7bXQBNIGKMJZWBiHEQpDWdHFI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kZXNp/Z25icm8uY29tL2Js/b2cvd3AtY29udGVu/dC91cGxvYWRzL3Nw/b3RpZnlfaWNvbi5q/cGc",
    companyName: "Spotify",
    posted: "4 days ago",
    jobRole: "Mobile App Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    payRate: 45,
    location: "Chennai, India",
  },
  {
    id: 7,
    companyLogo: "https://imgs.search.brave.com/6mt-yZhDq2qbTgKnCdL2WmJ4Xrf1iFKYWBT-hORuk-0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTEvTWV0YS1FbWJs/ZW0tNzAweDM5NC5w/bmc",
    companyName: "Meta",
    posted: "6 days ago",
    jobRole: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payRate: 60,
    location: "Gurugram, India",
  },
  {
    id: 8,
    companyLogo: "https://imgs.search.brave.com/We7SN_QQBm9rrwLyZcvkrd45VturmE75D7oHfh6Ccs0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI3LzIvYWlyYm5i/LWxvZ28tcG5nX3Nl/ZWtsb2dvLTI3Mjgw/Ni5wbmc",
    companyName: "Airbnb",
    posted: "8 days ago",
    jobRole: "Data Analyst",
    tag1: "Remote",
    tag2: "Junior Level",
    payRate: 38,
    location: "Noida, India",
  },
  {
    id: 9,
    companyLogo: "https://imgs.search.brave.com/kW_-0l7kbUzQb9kXN4FjeX1jNneO0wG7ud7S7ZkOWbI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5kZXNpZ25ydXNo/LmNvbS9pbnNwaXJh/dGlvbl9pbWFnZXMv/MTM1ODM2L2NvbnZl/cnNpb25zL18xNTIx/MTM1NDY5XzU2NF9V/YmVyTG9nb0Rlc2ln/bjIwMTItZGVza3Rv/cC5qcGc",
    companyName: "Uber",
    posted: "10 days ago",
    jobRole: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payRate: 48,
    location: "Kolkata, India",
  },
  {
    id: 10,
    companyLogo: "https://imgs.search.brave.com/1wVaHxqACCDS9nNn3G6mPhQzQl70_cz6l6au_upH__M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/MzM2LzQ4NC9zbWFs/bC90ZXNsYS1sb2dv/LXRlc2xhLWljb24t/dHJhbnNwYXJlbnQt/cG5nLWZyZWUtdmVj/dG9yLmpwZw",
    companyName: "Tesla",
    posted: "12 days ago",
    jobRole: "Cloud Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    payRate: 58,
    location: "Ahmedabad, India",
  },
];

  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){

        return <div key={idx}>
          <Card companyName={elem.companyName} posted={elem.posted} jobRole={elem.jobRole} tag1={elem.tag1} tag2={elem.tag2} payRate={elem.payRate} location={elem.location} companyLogo={elem.companyLogo}/>
        </div>
      })}
    </div>
  )
}

export default App
