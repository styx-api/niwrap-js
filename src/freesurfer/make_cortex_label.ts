// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MAKE_CORTEX_LABEL_METADATA: Metadata = {
    id: "f144e3d1e0fdf022a6e2282c867ba8f46fafc1cb.boutiques",
    name: "make_cortex_label",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MakeCortexLabelParameters {
    "__STYXTYPE__": "make_cortex_label";
    "subject": string;
    "hemi"?: string | null | undefined;
    "use_a2009s": boolean;
    "output_name"?: string | null | undefined;
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
        "make_cortex_label": make_cortex_label_cargs,
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
        "make_cortex_label": make_cortex_label_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `make_cortex_label(...)`.
 *
 * @interface
 */
interface MakeCortexLabelOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * The output cortex label file.
     */
    output_label_file: OutputPathType | null;
}


function make_cortex_label_params(
    subject: string,
    hemi: string | null = null,
    use_a2009s: boolean = false,
    output_name: string | null = "cortex",
): MakeCortexLabelParameters {
    /**
     * Build parameters.
    
     * @param subject The subject for which the cortex label is to be created.
     * @param hemi The hemisphere(s) on which to operate. Default is both hemispheres.
     * @param use_a2009s Use aparc.a2009 instead of aparc.
     * @param output_name Output name. The output will be ?h.outname.label. Default is 'cortex'.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "make_cortex_label" as const,
        "subject": subject,
        "use_a2009s": use_a2009s,
    };
    if (hemi !== null) {
        params["hemi"] = hemi;
    }
    if (output_name !== null) {
        params["output_name"] = output_name;
    }
    return params;
}


function make_cortex_label_cargs(
    params: MakeCortexLabelParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("make_cortex_label");
    cargs.push(
        "--s",
        (params["subject"] ?? null)
    );
    if ((params["hemi"] ?? null) !== null) {
        cargs.push(
            "--h",
            (params["hemi"] ?? null)
        );
    }
    if ((params["use_a2009s"] ?? null)) {
        cargs.push("--a2009s");
    }
    if ((params["output_name"] ?? null) !== null) {
        cargs.push(
            "--o",
            (params["output_name"] ?? null)
        );
    }
    return cargs;
}


function make_cortex_label_outputs(
    params: MakeCortexLabelParameters,
    execution: Execution,
): MakeCortexLabelOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MakeCortexLabelOutputs = {
        root: execution.outputFile("."),
        output_label_file: ((params["output_name"] ?? null) !== null) ? execution.outputFile(["?h.", (params["output_name"] ?? null), ".label"].join('')) : null,
    };
    return ret;
}


function make_cortex_label_execute(
    params: MakeCortexLabelParameters,
    execution: Execution,
): MakeCortexLabelOutputs {
    /**
     * A tool to create cortical labels.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MakeCortexLabelOutputs`).
     */
    params = execution.params(params)
    const cargs = make_cortex_label_cargs(params, execution)
    const ret = make_cortex_label_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function make_cortex_label(
    subject: string,
    hemi: string | null = null,
    use_a2009s: boolean = false,
    output_name: string | null = "cortex",
    runner: Runner | null = null,
): MakeCortexLabelOutputs {
    /**
     * A tool to create cortical labels.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject The subject for which the cortex label is to be created.
     * @param hemi The hemisphere(s) on which to operate. Default is both hemispheres.
     * @param use_a2009s Use aparc.a2009 instead of aparc.
     * @param output_name Output name. The output will be ?h.outname.label. Default is 'cortex'.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MakeCortexLabelOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MAKE_CORTEX_LABEL_METADATA);
    const params = make_cortex_label_params(subject, hemi, use_a2009s, output_name)
    return make_cortex_label_execute(params, execution);
}


export {
      MAKE_CORTEX_LABEL_METADATA,
      MakeCortexLabelOutputs,
      MakeCortexLabelParameters,
      make_cortex_label,
      make_cortex_label_params,
};
