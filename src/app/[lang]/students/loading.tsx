export default function Loading() {
    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded h-full w-1/4">
                    <div className="h-10 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="mt-4 h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    </div>
                </article>
                <article className="flex flex-col gap-gap p-gap justify-center bg-primary animate-pulse rounded w-full">
                </article>
            </section>
        </div>
    );
  }