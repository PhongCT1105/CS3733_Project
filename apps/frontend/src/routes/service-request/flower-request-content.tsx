import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area.tsx";
import {
  addOnCards,
  flowerCards,
} from "@/routes/service-request/contentInfo.ts";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card.tsx";
// import { ShoppingCart } from "lucide-react";
import { useState } from "react";
// import axios from "axios";
import { useToast } from "@/components/ui/use-toast.ts";
import { ToastAction } from "@/components/ui/toast";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";

interface cartItem {
  cost: number;
  name: string;
}

export const FlowerContent = () => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  // const totalCost = cartItems.reduce((sum, item) => sum + item.cost, 0);
  const { toast } = useToast();
  // async function submit() {
  //     const res = await axios.post("/api/flowerReq", totalCost, {
  //         headers: {
  //             "content-type": "Application/json",
  //         },
  //     });
  //     if (res.status == 200) {
  //         console.log("success");
  //     }
  // }

  const onAddItem = (item: cartItem): void => {
    const prevItems = [...cartItems];
    setCartItems((prev) => [
      ...prev,
      {
        name: item.name,
        cost: item.cost,
      },
    ]);
    console.log(item.name);

    toast({
      title: `You added ${item.name} to cart!`,
      description: "Would you like to undo?",
      action: (
        <ToastAction
          altText="Undo"
          onClick={() => {
            setCartItems(prevItems);
          }}
        >
          Undo
        </ToastAction>
      ),
    });
  };

  // <Button variant={"outline"} >
  //     {/*<ShoppingCart className="mr-2 h-4 w-4" />*/}
  //     Send Gift
  // </Button>

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Flower Request
          </h2>
          <p className="text-sm text-muted-foreground">
            Send a loved one a special gift
          </p>
        </div>
        <div className="ml-auto mr-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Submit Gift</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Submission form</DialogTitle>
                <DialogDescription>
                  Enter recipient's information below, then click submit when
                  done..
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Recipient's Name
                  </Label>
                  <Input id="name" placeholder="Name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="locatiom" className="text-right">
                    Recipient's Location
                  </Label>
                  <Input
                    id="locatiom"
                    placeholder="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 pb-4 my-3 ml-2">
            {flowerCards.map((flower) => (
              <Card
                className={
                  "lg-card justify-center shadow-none object-cover transition-all hover:scale-105 hover:shadow"
                }
              >
                <CardContent className={" w-[300px] mt-2"}>
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="h-64 mx-auto"
                  />
                  <CardTitle className={"text-center pt-2"}>
                    {flower.name}
                  </CardTitle>
                  <CardDescription
                    className={"text-center text-lg text-muted-foreground"}
                  >
                    ${flower.cost}
                  </CardDescription>
                  <CardDescription
                    className={
                      "text-center text-lg text-muted-foreground flex flex-col pt-2 items-center "
                    }
                  >
                    <Button
                      variant={"default"}
                      type={"button"}
                      onClick={() => onAddItem(flower)}
                    >
                      Add to cart
                    </Button>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Add-ons</h2>
        <p className="text-sm text-muted-foreground">
          Give something a little more
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-4 my-3 pb-4 ml-1">
            {addOnCards.map((addon) => (
              <Card
                className={
                  "lg-card justify-center shadow-none object-cover transition-all hover:scale-105 hover:shadow"
                }
              >
                <CardContent className={"w-[150px] mt-2"}>
                  <img
                    src={addon.image}
                    alt={addon.name}
                    width={"150px"}
                    className="h-32 mx-auto"
                  />
                  <CardTitle className={"text-center pt-2 font-normal"}>
                    {addon.name}
                  </CardTitle>
                  <CardDescription
                    className={"text-center text-lg text-muted-foreground"}
                  >
                    ${addon.cost}
                  </CardDescription>
                  <CardDescription
                    className={
                      "text-center text-lg text-muted-foreground flex flex-col pt-2 items-center "
                    }
                  >
                    <Button
                      variant={"default"}
                      type={"button"}
                      onClick={() => {
                        setCartItems((prev) => [
                          ...prev,
                          {
                            name: addon.name,
                            cost: addon.cost,
                          },
                        ]);
                        console.log(addon.name);
                      }}
                    >
                      Add to cart
                    </Button>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
