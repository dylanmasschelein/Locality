from rest_framework.response import Response
from rest_framework.views import APIView
from bookings.models import Bookings
from bookings.serializers import BookingsSerializer


class BookingList(APIView):
    def get(self, request):
        bookingList = Bookings.objects.all()
        serializer = BookingsSerializer(bookingList, many=True)
        return Response(serializer.data)


class BookingCreate(APIView):
    def post(self, request):
        serializer = BookingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BookingsDetail(APIView):
    def get_booking_by_pk(self, pk):
        try:
            return Bookings.objects.get(pk=pk)
        except:
            return Response({
                'error': "Booking does not exists",
            }, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        booking = self.get_booking_by_pk(pk)
        serializer = BookingsSerializer(booking)
        return Response(serializer.data)

    def put(self, request, pk):
        booking = self.get_booking_by_pk(pk)
        serializer = BookingsSerializer(booking, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        booking = self.get_booking_by_pk(pk)
        booking.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
