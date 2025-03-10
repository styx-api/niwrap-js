// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_1D_RPLOT_METADATA: Metadata = {
    id: "97370e286ceee3c0b1e0eb62c1b51f85396f905d.boutiques",
    name: "1dRplot",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V1dRplotParameters {
    "__STYXTYPE__": "1dRplot";
    "input_file": InputPathType;
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
        "1dRplot": v_1d_rplot_cargs,
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
        "1dRplot": v_1d_rplot_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `v_1d_rplot(...)`.
 *
 * @interface
 */
interface V1dRplotOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output plot file
     */
    output_plot: OutputPathType;
}


function v_1d_rplot_params(
    input_file: InputPathType,
): V1dRplotParameters {
    /**
     * Build parameters.
    
     * @param input_file Input 1D file to plot
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "1dRplot" as const,
        "input_file": input_file,
    };
    return params;
}


function v_1d_rplot_cargs(
    params: V1dRplotParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("1dRplot");
    cargs.push(
        "-input",
        execution.inputFile((params["input_file"] ?? null))
    );
    cargs.push("[OPTIONS]");
    return cargs;
}


function v_1d_rplot_outputs(
    params: V1dRplotParameters,
    execution: Execution,
): V1dRplotOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V1dRplotOutputs = {
        root: execution.outputFile("."),
        output_plot: execution.outputFile(["[OUTPUT_PREFIX]*.jpg"].join('')),
    };
    return ret;
}


function v_1d_rplot_execute(
    params: V1dRplotParameters,
    execution: Execution,
): V1dRplotOutputs {
    /**
     * Program for plotting a 1D file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V1dRplotOutputs`).
     */
    params = execution.params(params)
    const cargs = v_1d_rplot_cargs(params, execution)
    const ret = v_1d_rplot_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_1d_rplot(
    input_file: InputPathType,
    runner: Runner | null = null,
): V1dRplotOutputs {
    /**
     * Program for plotting a 1D file.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_file Input 1D file to plot
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V1dRplotOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_1D_RPLOT_METADATA);
    const params = v_1d_rplot_params(input_file)
    return v_1d_rplot_execute(params, execution);
}


export {
      V1dRplotOutputs,
      V1dRplotParameters,
      V_1D_RPLOT_METADATA,
      v_1d_rplot,
      v_1d_rplot_params,
};
