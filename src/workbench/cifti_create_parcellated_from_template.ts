// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const CIFTI_CREATE_PARCELLATED_FROM_TEMPLATE_METADATA: Metadata = {
    id: "81de66b8d2494d8b0b2712ff6eedf93bc55b8a37.boutiques",
    name: "cifti-create-parcellated-from-template",
    package: "workbench",
    container_image_tag: "brainlife/connectome_workbench:1.5.0-freesurfer-update",
};


interface CiftiCreateParcellatedFromTemplateCiftiParameters {
    "__STYXTYPE__": "cifti";
    "cifti_in": InputPathType;
}


interface CiftiCreateParcellatedFromTemplateParameters {
    "__STYXTYPE__": "cifti-create-parcellated-from-template";
    "cifti_template": InputPathType;
    "modify_direction": string;
    "cifti_out": string;
    "opt_fill_value_value"?: number | null | undefined;
    "cifti"?: Array<CiftiCreateParcellatedFromTemplateCiftiParameters> | null | undefined;
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
        "cifti-create-parcellated-from-template": cifti_create_parcellated_from_template_cargs,
        "cifti": cifti_create_parcellated_from_template_cifti_cargs,
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
        "cifti-create-parcellated-from-template": cifti_create_parcellated_from_template_outputs,
    };
    return outputsFuncs[t];
}


function cifti_create_parcellated_from_template_cifti_params(
    cifti_in: InputPathType,
): CiftiCreateParcellatedFromTemplateCiftiParameters {
    /**
     * Build parameters.
    
     * @param cifti_in the input parcellated cifti file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti" as const,
        "cifti_in": cifti_in,
    };
    return params;
}


function cifti_create_parcellated_from_template_cifti_cargs(
    params: CiftiCreateParcellatedFromTemplateCiftiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-cifti");
    cargs.push(execution.inputFile((params["cifti_in"] ?? null)));
    return cargs;
}


/**
 * Output object returned when calling `cifti_create_parcellated_from_template(...)`.
 *
 * @interface
 */
interface CiftiCreateParcellatedFromTemplateOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * the output cifti file
     */
    cifti_out: OutputPathType;
}


function cifti_create_parcellated_from_template_params(
    cifti_template: InputPathType,
    modify_direction: string,
    cifti_out: string,
    opt_fill_value_value: number | null = null,
    cifti: Array<CiftiCreateParcellatedFromTemplateCiftiParameters> | null = null,
): CiftiCreateParcellatedFromTemplateParameters {
    /**
     * Build parameters.
    
     * @param cifti_template a cifti file with the template parcel mapping along column
     * @param modify_direction which dimension of the output file should match the template (integer, 'ROW', or 'COLUMN')
     * @param cifti_out the output cifti file
     * @param opt_fill_value_value specify value to be used in parcels that don't match: value to use (default 0)
     * @param cifti specify an input cifti file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "cifti-create-parcellated-from-template" as const,
        "cifti_template": cifti_template,
        "modify_direction": modify_direction,
        "cifti_out": cifti_out,
    };
    if (opt_fill_value_value !== null) {
        params["opt_fill_value_value"] = opt_fill_value_value;
    }
    if (cifti !== null) {
        params["cifti"] = cifti;
    }
    return params;
}


function cifti_create_parcellated_from_template_cargs(
    params: CiftiCreateParcellatedFromTemplateParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("wb_command");
    cargs.push("-cifti-create-parcellated-from-template");
    cargs.push(execution.inputFile((params["cifti_template"] ?? null)));
    cargs.push((params["modify_direction"] ?? null));
    cargs.push((params["cifti_out"] ?? null));
    if ((params["opt_fill_value_value"] ?? null) !== null) {
        cargs.push(
            "-fill-value",
            String((params["opt_fill_value_value"] ?? null))
        );
    }
    if ((params["cifti"] ?? null) !== null) {
        cargs.push(...(params["cifti"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    return cargs;
}


function cifti_create_parcellated_from_template_outputs(
    params: CiftiCreateParcellatedFromTemplateParameters,
    execution: Execution,
): CiftiCreateParcellatedFromTemplateOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: CiftiCreateParcellatedFromTemplateOutputs = {
        root: execution.outputFile("."),
        cifti_out: execution.outputFile([(params["cifti_out"] ?? null)].join('')),
    };
    return ret;
}


function cifti_create_parcellated_from_template_execute(
    params: CiftiCreateParcellatedFromTemplateParameters,
    execution: Execution,
): CiftiCreateParcellatedFromTemplateOutputs {
    /**
     * Match parcels to template by name.
     * 
     * For each parcel name in the template mapping, find that name in an input cifti file and use its data in the output file.  All input cifti files must have a parcels mapping along <modify-direction> and matching mappings along other dimensions.  The direction can be either an integer starting from 1, or the strings 'ROW' or 'COLUMN'.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `CiftiCreateParcellatedFromTemplateOutputs`).
     */
    params = execution.params(params)
    const cargs = cifti_create_parcellated_from_template_cargs(params, execution)
    const ret = cifti_create_parcellated_from_template_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function cifti_create_parcellated_from_template(
    cifti_template: InputPathType,
    modify_direction: string,
    cifti_out: string,
    opt_fill_value_value: number | null = null,
    cifti: Array<CiftiCreateParcellatedFromTemplateCiftiParameters> | null = null,
    runner: Runner | null = null,
): CiftiCreateParcellatedFromTemplateOutputs {
    /**
     * Match parcels to template by name.
     * 
     * For each parcel name in the template mapping, find that name in an input cifti file and use its data in the output file.  All input cifti files must have a parcels mapping along <modify-direction> and matching mappings along other dimensions.  The direction can be either an integer starting from 1, or the strings 'ROW' or 'COLUMN'.
     * 
     * Author: Connectome Workbench Developers
     * 
     * URL: https://github.com/Washington-University/workbench
    
     * @param cifti_template a cifti file with the template parcel mapping along column
     * @param modify_direction which dimension of the output file should match the template (integer, 'ROW', or 'COLUMN')
     * @param cifti_out the output cifti file
     * @param opt_fill_value_value specify value to be used in parcels that don't match: value to use (default 0)
     * @param cifti specify an input cifti file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `CiftiCreateParcellatedFromTemplateOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(CIFTI_CREATE_PARCELLATED_FROM_TEMPLATE_METADATA);
    const params = cifti_create_parcellated_from_template_params(cifti_template, modify_direction, cifti_out, opt_fill_value_value, cifti)
    return cifti_create_parcellated_from_template_execute(params, execution);
}


export {
      CIFTI_CREATE_PARCELLATED_FROM_TEMPLATE_METADATA,
      CiftiCreateParcellatedFromTemplateCiftiParameters,
      CiftiCreateParcellatedFromTemplateOutputs,
      CiftiCreateParcellatedFromTemplateParameters,
      cifti_create_parcellated_from_template,
      cifti_create_parcellated_from_template_cifti_params,
      cifti_create_parcellated_from_template_params,
};
