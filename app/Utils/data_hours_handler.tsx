export const getFormatedHour = (dayDT:number)=>{
    const tempDate = new Date(dayDT * 1000).toLocaleTimeString('fr-FR', {hour: 'numeric', minute: 'numeric' })
    const tempTime:string = `${tempDate}h`
    return tempTime
}
export const getFormatedDateLong = (dayDT:number) =>{
    const timestamp: number = dayDT * 1000; 
    const date: Date = new Date(timestamp);

    const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC', 
    };

    const formattedDate: string = date.toLocaleDateString('fr-FR', options);
    return formattedDate
}

export const getDateData = async(allData: any, dateDT_TXT: string) => {
    const date = dateDT_TXT ? dateDT_TXT.split(' ')[0] : null
    if(allData !== null){
        const filteredWeather = allData.list.filter((element: any) =>
            element.dt_txt.includes(date)
        );
        return filteredWeather
    }
}

export const getDateData2 = async(allData: any, dateDT:number) => {
    const dateObject = new Date(dateDT * 1000);
    const formattedDate = dateObject.toISOString().split('T')[0];
    
    if(allData !== null){
        const filteredWeather = allData.list.filter((element: any) =>
            element.dt_txt.includes(formattedDate)
        );
        return filteredWeather
    }
}