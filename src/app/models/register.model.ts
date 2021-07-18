export class Register {

    public PersonalDetails:PersonalDetails;
    public  AddressDetails:AddressDetails;
    public ContactDetails:ContactDetails

}
    export class PersonalDetails{
        public RegistrationNo: string; 
        public ProfilePic : string;
        public FirstName : string;
        public MiddleName : string;
        public LastName : string;
        public FatherName : string;
        public FatherFirstName : string;
        public FatherMiddleName : string;     
        public CompanyId : number;
        public DivisionId: number;
        public DesignationId: number;
        public EmpCode: number;
        public DateofJoining : string;
    }
    export  class AddressDetails{
        public Country: string;
        public State: string;
        public District: string;
        public PoliceStation: string;
        public Street: string;
        public HouseNo : number;
        public Lane : number;

    }   
    export class ContactDetails{
        public EmailId : string;
        public ContactNo : number;
        public LandlineNo : number;  
    } 
   
    

