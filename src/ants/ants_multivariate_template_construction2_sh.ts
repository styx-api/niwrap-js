// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ANTS_MULTIVARIATE_TEMPLATE_CONSTRUCTION2_SH_METADATA: Metadata = {
    id: "b866ae2f76511eca887345fe0515e30b2318f31e.boutiques",
    name: "antsMultivariateTemplateConstruction2.sh",
    package: "ants",
    container_image_tag: "antsx/ants:v2.5.3",
};


interface AntsMultivariateTemplateConstruction2ShParameters {
    "__STYXTYPE__": "antsMultivariateTemplateConstruction2.sh";
    "input": string;
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
        "antsMultivariateTemplateConstruction2.sh": ants_multivariate_template_construction2_sh_cargs,
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
        "antsMultivariateTemplateConstruction2.sh": ants_multivariate_template_construction2_sh_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `ants_multivariate_template_construction2_sh(...)`.
 *
 * @interface
 */
interface AntsMultivariateTemplateConstruction2ShOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output multivariate template.
     */
    template: OutputPathType;
}


function ants_multivariate_template_construction2_sh_params(
    input: string,
): AntsMultivariateTemplateConstruction2ShParameters {
    /**
     * Build parameters.
    
     * @param input Options for setting up and running the multivariate template construction process.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "antsMultivariateTemplateConstruction2.sh" as const,
        "input": input,
    };
    return params;
}


function ants_multivariate_template_construction2_sh_cargs(
    params: AntsMultivariateTemplateConstruction2ShParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("antsMultivariateTemplateConstruction2.sh");
    cargs.push((params["input"] ?? null));
    return cargs;
}


function ants_multivariate_template_construction2_sh_outputs(
    params: AntsMultivariateTemplateConstruction2ShParameters,
    execution: Execution,
): AntsMultivariateTemplateConstruction2ShOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AntsMultivariateTemplateConstruction2ShOutputs = {
        root: execution.outputFile("."),
        template: execution.outputFile(["<output-prefix>Template.nii.gz"].join('')),
    };
    return ret;
}


function ants_multivariate_template_construction2_sh_execute(
    params: AntsMultivariateTemplateConstruction2ShParameters,
    execution: Execution,
): AntsMultivariateTemplateConstruction2ShOutputs {
    /**
     * The antsMultivariateTemplateConstruction2.sh script is part of the Advanced Normalization Tools (ANTs) suite. It is used for constructing multivariate templates.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AntsMultivariateTemplateConstruction2ShOutputs`).
     */
    params = execution.params(params)
    const cargs = ants_multivariate_template_construction2_sh_cargs(params, execution)
    const ret = ants_multivariate_template_construction2_sh_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function ants_multivariate_template_construction2_sh(
    input: string,
    runner: Runner | null = null,
): AntsMultivariateTemplateConstruction2ShOutputs {
    /**
     * The antsMultivariateTemplateConstruction2.sh script is part of the Advanced Normalization Tools (ANTs) suite. It is used for constructing multivariate templates.
     * 
     * Author: ANTs Developers
     * 
     * URL: https://github.com/ANTsX/ANTs
    
     * @param input Options for setting up and running the multivariate template construction process.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AntsMultivariateTemplateConstruction2ShOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ANTS_MULTIVARIATE_TEMPLATE_CONSTRUCTION2_SH_METADATA);
    const params = ants_multivariate_template_construction2_sh_params(input)
    return ants_multivariate_template_construction2_sh_execute(params, execution);
}


export {
      ANTS_MULTIVARIATE_TEMPLATE_CONSTRUCTION2_SH_METADATA,
      AntsMultivariateTemplateConstruction2ShOutputs,
      AntsMultivariateTemplateConstruction2ShParameters,
      ants_multivariate_template_construction2_sh,
      ants_multivariate_template_construction2_sh_params,
};
