"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CancelListingBtn = ({ listingId, token }) => {

  const router = useRouter();

const handleDelete = async () => {

  try {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_EXPLORE_CAR_API_URL}/cars/${listingId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await res.json();

    if (res.ok) {

      toast.success("Listing deleted successfully");

      router.refresh();

    } else {

      toast.error(data?.message || "Failed to delete listing");

    }

  } catch (error) {

    console.log(error);

    toast.error("Something went wrong");

  }

};

  return (
    <AlertDialog>

      <Button color="danger" variant="light" size="sm">
        Cancel
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>

          <AlertDialog.Dialog className="sm:max-w-100">

            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Confirm Cancellation
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-slate-600">
                Are you sure you want to cancel this booking?
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>

              <Button slot="close" variant="tertiary">
                No
              </Button>

              <Button
                slot="close"
                color="danger"
                className="font-bold"
                onPress={handleDelete}
              >
                Yes, Cancel
              </Button>

            </AlertDialog.Footer>

          </AlertDialog.Dialog>

        </AlertDialog.Container>
      </AlertDialog.Backdrop>

    </AlertDialog>
  );
};

export default CancelListingBtn;