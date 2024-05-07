import { DateField } from "@prismicio/client";
import dayjs from "dayjs";

interface PrismicDocumentGeneric{
    data:{
        date:DateField
    }
}

export function createContentSectionList<
    T extends PrismicDocumentGeneric
    >(
        res: T[]
    ) {
    const sectionList: {title:string, contentList: T[]}[] = [];
    res.forEach(content => {
        const year = dayjs(content.data.date).year();
        const contentListNueva = sectionList[year]?.contentList ?? [];

        contentListNueva.push(content);
        sectionList[year] = {
            title: year.toString(),
            contentList: contentListNueva
        };
    });

    sectionList.sort((a, b) => {
        let fechaA = parseInt(a.title);
        let fechaB = parseInt(b.title);
      
        if (fechaA < fechaB) {
          return 1;
        }
        if (fechaA > fechaB) {
          return -1;
        }
        return 0;
    });

    return sectionList;
}