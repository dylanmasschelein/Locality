
from django.urls import path
from bookings.views import BookingList, BookingCreate, BookingsDetail

urlpatterns = [
    path('', BookingCreate.as_view()),
    path('list/', BookingList.as_view()),
    path('<int:pk>', BookingsDetail.as_view()),

]
