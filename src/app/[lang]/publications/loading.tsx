import Separator from "../components/separator";

export default function Loading() {
    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded h-full w-full lg:w-1/4">
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                </article>
                <article className="flex flex-col gap-gap p-gap justify-center bg-primary animate-pulse rounded w-full h-[433px]">
                </article>
            </section>
            <section className="
                flex flex-col lg:flex-row-reverse relative gap-gap
            ">
                <article
                    className="
                    rounded
                    flex
                    overflow-hidden
                    bg-secondary
                    lg:flex-col
                    lg:w-[15rem]
                    lg:sticky 
                    lg:top-gap
                    h-fit
                    "
                >
                    <div className="flex
                                justify-center
                                items-center
                                px-padding
                                py-gap
                                ">
                        <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
                    </div>
                    <div className="flex
                                justify-center
                                items-center
                                px-padding
                                py-gap
                                ">
                        <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
                    </div>
                </article>
                <div className="grow flex flex-col gap-gap">
                    <article className="flex flex-col gap-gap justify-center bg-white rounded p-padding w-full">
                            <div className="h-11 bg-primary rounded w-[20rem] animate-pulse"></div>
                            <Separator/>
                    </article>  
                    <article className="flex flex-col gap-gap p-padding justify-center bg-white rounded grow">
                        <div>
                            <div className=" h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                            <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                            <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                        </div>
                    </article>
                    <article className="flex flex-col gap-gap p-padding justify-center bg-white rounded grow">
                        <div>
                            <div className=" h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                            <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                            <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
  }