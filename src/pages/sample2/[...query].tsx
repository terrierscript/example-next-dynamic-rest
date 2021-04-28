import { GetStaticPaths, GetStaticProps } from "next"

const Page = () => {
  return <div>aaa</div>
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("xx")
  return {
    props: {},
    revalidate: 10
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}
export default Page