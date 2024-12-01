import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen px-4 flex items-center my-20">
        <div className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold mb-8">
              Connecting Patients with Local <br />
              <span className="text-primary">Blood</span> Donor
            </CardTitle>
            <CardDescription>
              Join our mission to make a difference. Every drop of blood counts,
              and every donor is a hero.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="ml-auto">Blood Request Update</Button>
          </CardFooter>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background text-foreground px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>
            Our blood donation system connects donors with those in need,
            ensuring that every patient has access to life-saving resources.
            Together, we can make a difference in countless lives.
          </p>
        </div>
      </section>

      {/* Our Heroes Section */}
      <section className="py-20 bg-muted text-foreground px-4">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Our Heroes</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {["John Doe", "Jane Smith", "Alex Johnson", "Chris Lee", "Patricia Brown", "Patricia Brown", "Patricia Brown", "Patricia Brown"].map((hero, idx) => (
        <Card key={idx}>
          <CardHeader className="text-center">
            <Avatar className="w-full h-full mx-auto mb-4 rounded-none">
              <AvatarImage
                src={`https://via.placeholder.com/150?text=${hero.split(" ")[0]}`}
                alt={hero}
                className="rounded-none" // Ensures the image is square
              />
              <AvatarFallback className="rounded-none">
                {hero.split(" ")[0]}
              </AvatarFallback>
            </Avatar>

            <CardTitle>{hero}</CardTitle>
            <CardDescription>
              Blood Group: <span className="font-bold">O+</span>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Contact Details Section */}
      <section className="py-20 bg-accent-foreground text-background px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="flex justify-center items-center ">Contact Us</h1>
            <div>
              Have questions or need help? Reach out to us anytime.
            </div>
          </div>
          <div>
            <div className="space-y-4 font-bold flex flex-col items-start">
              <p>
                <strong>Email:</strong> info@blooddonation.com
              </p>
              <p>
                <strong>Phone:</strong> +123 456 7890
              </p>
              <p>
                <strong>Address:</strong> 123 Blood Drive, Lifesaving City,
                Country
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
