import Cover from "../../components/common/Cover/Cover"
import Header from "../../components/common/Header/Header"
import Results from "../../components/common/Results/Results"
import Layout from "../../components/layout/Layout"

const HomeView = () => {
    return (
        <Layout>
            <Header />
            <Cover />
            <Results />
        </Layout>
    )
}

export default HomeView