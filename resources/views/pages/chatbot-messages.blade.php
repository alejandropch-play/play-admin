@extends('layouts.dashboard')
@section('content')
    <chatbot-messages route-all="{{ route('admin.chatbot-messages.get-all')}}"
    route-by="{{ route('admin.chatbot-messages.get-by')}}"></chatbot-messages>
@endsection