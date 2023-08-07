import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import CTA from "components/home/CTA"
import Features from "components/home/Features"
import Header from "components/home/Header"
import Incentives from "components/home/Incentives"
import UseCases from "components/home/UseCases"
import Layout from "hocs/layouts/Layout"
import LogoCloud from "components/home/LogoCloud"
import BlogList from "components/home/BlogList"

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home