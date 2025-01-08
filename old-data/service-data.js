import coaching from '../../assets/SSDC_Coaching.pdf'

export const services = {
    boxHeader: "Menu of Services"
}

export const service1 = {
    header: "Assessment and Strategy",
    content:
    <ul>
        <li><b>Fundraising assessment and strategy:</b> Includes fundraising readiness assessment. Final deliverable is a detailed document outlining a diverse portfolio of fundraising efforts meant to promote sustainability that is tailored to your organization’s mission, constituency and culture.</li>
        <br/>
        <li><b>Organizational culture assessment and strategy:</b> Includes fundraising readiness assessment.  Final deliverable is a presentation of recommendations to create and promote a culture of philanthropy within your organization.</li>
    </ul>
}

export const service2 = {
    header: "Planning, Implementation and Interim Support",
    content: 
    <ul>
        <li><b>Event planning and implementation:</b> Includes “friend-raising” and fundraising events ranging from small, intimate events to large galas.</li>
        <br/>
        <li><b>Campaign planning and implementation:</b> Management of all phases of a major campaign as well as smaller, online crowdfunding campaigns.</li>
        <br/>
        <li><b>Major Donor Cultivation and Stewardship:</b> Hands-on support in prospecting, cultivating and stewarding individual donors.</li>
        <br/>
        <li><b>Interim development staff:</b> Need a development staff person to enhance your fundraising efforts or just keep them moving while recruiting someone permanent?  I can help!</li>
        <br/>
        <li><b>Strategic grant writing and prospecting:</b> Identify prospects and plan a grant proposal strategy that includes a timeline for submission, stewardship and reporting. Can also include strategies for data collection to track and report impact.</li>
        <br/>
        <li><b>Annual Appeals:</b> Planning and implementation of comprehensive annual appeal efforts meant to increase return.  Includes letter writing, social media and tailored strategies for various constituencies.</li>
    </ul>
}

export const service3 = {
    header: "Coaching",
    content: 
    <>
    <p>Do you have great staff and volunteers that would benefit from regular support and guidance on fundraising strategy and implementation?   Services include one-on-one coaching sessions, weekly check-ins and prompts for development timeline implementation on a wide array of fundraising strategies. Here is what we offer: </p>
    <br/>
    <ul>
        <li><b>Development staff coaching</b></li>
        <br/>
        <li><b>Board fundraising and coaching</b></li>
        <br/> 
        <li><b>Executive and leadership coaching</b></li>
    </ul>
    <br/>
    <p>We offer a comprehensive PDF to learn more about our coaching. To view or download, <a href={coaching} target="_blank">click here</a></p>
    </>
}