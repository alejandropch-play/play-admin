@extends('layouts.dashboard')
@section('content')
    <contacts all-export="{{ route('admin.leads.all-export')}}" 
  filter-export="{{ route('admin.leads.filter-export')}}"  :leads-by-department="{{ json_encode($leads_by_department) }}" :leads-by-source="{{ json_encode($leads_by_source) }}"></contacts>
@endsection