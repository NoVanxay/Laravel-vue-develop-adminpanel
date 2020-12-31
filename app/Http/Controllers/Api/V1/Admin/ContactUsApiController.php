<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactUsRequest;
use App\Http\Requests\UpdateContactUsRequest;
use App\Http\Resources\Admin\ContactUsResource;
use App\Models\ContactUs;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ContactUsApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('contact_us_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ContactUsResource(ContactUs::advancedFilter());
    }

    public function store(StoreContactUsRequest $request)
    {
        $contactUs = ContactUs::create($request->validated());

        return (new ContactUsResource($contactUs))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(ContactUs $contactUs)
    {
        abort_if(Gate::denies('contact_us_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(ContactUs $contactUs)
    {
        abort_if(Gate::denies('contact_us_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ContactUsResource($contactUs);
    }

    public function update(UpdateContactUsRequest $request, ContactUs $contactUs)
    {
        $contactUs->update($request->validated());

        return (new ContactUsResource($contactUs))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(ContactUs $contactUs)
    {
        abort_if(Gate::denies('contact_us_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ContactUsResource($contactUs),
            'meta' => [],
        ]);
    }

    public function destroy(ContactUs $contactUs)
    {
        abort_if(Gate::denies('contact_us_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $contactUs->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
