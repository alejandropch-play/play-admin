<?php

namespace App\Exports;

use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\Support\Responsable;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Excel;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\Exportable;

class LeadExport implements FromView, Responsable, WithColumnWidths
{
    use Exportable;

    private $fileName = 'PLAY Group Leads.xlsx';
    private $writerType = Excel::XLSX;

    private $start;
    private $end;
    private $leads;

    public function __construct($start = null, $end = null, $leads)
    {
        $this->start = $start;
        $this->end = $end;
        $this->leads = $leads;
    }


    private $headers = [
        'Content-Type' => 'text/xlsx',
    ];
    /**
    * @return \Illuminate\Support\Collection
    */
    public function view(): View
    {
        return view('exports.leads', [
            'today' =>  (Carbon::now())->format('H:i d-m-Y'),
            'leads' => $this->leads,
            "start" => $this->start,
            "end" => $this->end
        ]);
    }

    public function columnWidths(): array
    {
        return [
            'A' => 45,
            'B' => 45,  
            'C' => 45,  
            'D' => 45,  
            'E' => 45,  
            'F' => 45,  
            'G' => 45,            
            'H' => 45,  
            'I' => 45,  
            'J' => 45,  
        ];
    }
}
