// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const HIAM_MAKE_TEMPLATE_METADATA: Metadata = {
    id: "8c48bbfd46c7f8da62fb53ac9c94dd28311f4d1a.boutiques",
    name: "hiam_make_template",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface HiamMakeTemplateParameters {
    "__STYXTYPE__": "hiam_make_template";
    "hemi": string;
    "surface_name": string;
    "subjects": Array<string>;
    "output_name": string;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "hiam_make_template": hiam_make_template_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `hiam_make_template(...)`.
 *
 * @interface
 */
interface HiamMakeTemplateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function hiam_make_template_params(
    hemi: string,
    surface_name: string,
    subjects: Array<string>,
    output_name: string,
): HiamMakeTemplateParameters {
    /**
     * Build parameters.
    
     * @param hemi Hemisphere to be processed (e.g. lh or rh)
     * @param surface_name Name of the surface
     * @param subjects List of subject identifiers
     * @param output_name Name of the output template
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "hiam_make_template" as const,
        "hemi": hemi,
        "surface_name": surface_name,
        "subjects": subjects,
        "output_name": output_name,
    };
    return params;
}


function hiam_make_template_cargs(
    params: HiamMakeTemplateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("hiam_make_template");
    cargs.push((params["hemi"] ?? null));
    cargs.push((params["surface_name"] ?? null));
    cargs.push(...(params["subjects"] ?? null));
    cargs.push((params["output_name"] ?? null));
    return cargs;
}


function hiam_make_template_outputs(
    params: HiamMakeTemplateParameters,
    execution: Execution,
): HiamMakeTemplateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: HiamMakeTemplateOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function hiam_make_template_execute(
    params: HiamMakeTemplateParameters,
    execution: Execution,
): HiamMakeTemplateOutputs {
    /**
     * This program adds a template into an average surface using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `HiamMakeTemplateOutputs`).
     */
    params = execution.params(params)
    const cargs = hiam_make_template_cargs(params, execution)
    const ret = hiam_make_template_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function hiam_make_template(
    hemi: string,
    surface_name: string,
    subjects: Array<string>,
    output_name: string,
    runner: Runner | null = null,
): HiamMakeTemplateOutputs {
    /**
     * This program adds a template into an average surface using FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param hemi Hemisphere to be processed (e.g. lh or rh)
     * @param surface_name Name of the surface
     * @param subjects List of subject identifiers
     * @param output_name Name of the output template
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `HiamMakeTemplateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(HIAM_MAKE_TEMPLATE_METADATA);
    const params = hiam_make_template_params(hemi, surface_name, subjects, output_name)
    return hiam_make_template_execute(params, execution);
}


export {
      HIAM_MAKE_TEMPLATE_METADATA,
      HiamMakeTemplateOutputs,
      HiamMakeTemplateParameters,
      hiam_make_template,
      hiam_make_template_params,
};
