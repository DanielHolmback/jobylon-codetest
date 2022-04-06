
interface CompanyInfo {
    cover: string
    descr: string
    id: number
    industry: string
    logo: string
    name: string
    name_internal: string
    slug: string
    website: string
}

interface ContactInfo {
    email: string
    name: string
    phone: string
    photo: string
}

interface OwnerINfo {
    email: string
    name: string
    id: number
}

interface Location {    
    location: {[key:string]:string}
}

interface URLs {
    ad: string
    apply: string
}

interface Video {
    content?: string
    url: string
}

interface JobylonJob {
    benefits: string[]
    categories: string[]
    company: CompanyInfo
    contact: ContactInfo
    departments: string[]
    descr:string
    employment_type: string
    experience: string
    from_date: string
    function: string
    id: number
    internal_reference: any
    language:string
    layers_1: string[]
    layers_2: string[]
    layers_3: string[]
    layers_4: string[]
    layers_5: string[]
    linkedInCompanyId: number
    locaitons: Location[]
    skills: string
    slug: string
    title: string
    to_date: any
    urls: URLs
    video:Video
}