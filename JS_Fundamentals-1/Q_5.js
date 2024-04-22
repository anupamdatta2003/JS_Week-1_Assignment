let packageType = "express";

switch (packageType) {
    case "standard":
        console.log("Your package will be delivered in next 3-5 days");
        break;
    case "express":
        console.log("Your package will be delivered in next 1-2 days");
        break;
    case "overnight":
        console.log("Your package will be delivered by tommorow");
        break;    
    default:
        console.log("Inavlid package type");
        break;
}
