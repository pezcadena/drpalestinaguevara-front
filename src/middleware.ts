import { NextRequest, NextResponse } from "next/server";
import Negotiator from 'negotiator';
import { match } from "@formatjs/intl-localematcher";

const defaultLocale = 'es';
const locales = ['es','en'];

function getLocale(request: NextRequest){
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined;
    const headers = {
        'accept-language': acceptedLanguage
    }
    const languages = new Negotiator({headers}).languages();

    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest){
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(
        (locale)=> !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }
}

export const config ={
    matcher: [
        '/((?!api|assets|.*\\..*|_next).*)',
    ]
}