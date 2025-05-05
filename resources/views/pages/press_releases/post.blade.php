@extends('layouts.dashboard')
@section('content')
  <press_releases app-url="{{ config('app.url') }}"></press_releases>
@endsection