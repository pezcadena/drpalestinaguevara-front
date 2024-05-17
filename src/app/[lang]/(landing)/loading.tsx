import Separator from "../components/separator";

export default function Loading() {
  const recentPublications = [1,2,3,4];

    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded h-full w-full lg:w-1/3">
                    <div className="h-10 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    </div>
                </article>
                <article className="flex flex-col gap-gap p-gap justify-center bg-primary animate-pulse rounded lg:h-full w-full h-[433px]">
                </article>
            </section>
            <section className="flex flex-col gap-gap">
                <div className="flex flex-wrap -m-mitad-gap items-stretch">
                    <div className="grow w-full lg:basis-1/2 p-mitad-gap">
                        <article className="flex flex-col gap-gap justify-center bg-primary rounded p-padding w-full">
                            <div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                            </div>
                        </article>  
                    </div>  
                    <div className="grow lg:basis-1/2 p-mitad-gap">
                        <article className="flex flex-col gap-gap justify-center bg-primary rounded p-padding w-full">
                            <div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                            </div>
                        </article>  
                    </div>   
                </div>
                <article className="flex flex-col gap-gap justify-center bg-white rounded p-padding w-full">
                        <div className="h-11 bg-primary rounded w-[20rem] animate-pulse"></div>
                        <Separator/>
                </article>  
                <div className="flex flex-wrap -m-mitad-gap">
                {
                    recentPublications.map(document=>
                        <div className="grow w-full lg:basis-1/2 p-mitad-gap" key={document}>
                            <article className="flex flex-col gap-gap justify-center bg-white rounded p-padding w-full">
                                <div>
                                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                                </div>
                            </article>  
                        </div> 
                    )
                }
                </div>
            </section>
        </div>
    );
  }