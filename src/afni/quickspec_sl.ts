// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const QUICKSPEC_SL_METADATA: Metadata = {
    id: "e5cdd0aedd96bc6df0f947244131010bf4fd383f.boutiques",
    name: "quickspecSL",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface QuickspecSlParameters {
    "__STYXTYPE__": "quickspecSL";
    "surf_A": InputPathType;
    "surf_B": InputPathType;
    "surf_intermed_pref"?: string | null | undefined;
    "infl_surf_A"?: InputPathType | null | undefined;
    "infl_surf_B"?: InputPathType | null | undefined;
    "infl_surf_intermed_pref"?: string | null | undefined;
    "both_lr_flag": boolean;
    "out_spec"?: string | null | undefined;
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
        "quickspecSL": quickspec_sl_cargs,
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
        "quickspecSL": quickspec_sl_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `quickspec_sl(...)`.
 *
 * @interface
 */
interface QuickspecSlOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output spec file
     */
    output_spec_file: OutputPathType | null;
}


function quickspec_sl_params(
    surf_a: InputPathType,
    surf_b: InputPathType,
    surf_intermed_pref: string | null = null,
    infl_surf_a: InputPathType | null = null,
    infl_surf_b: InputPathType | null = null,
    infl_surf_intermed_pref: string | null = null,
    both_lr_flag: boolean = false,
    out_spec: string | null = null,
): QuickspecSlParameters {
    /**
     * Build parameters.
    
     * @param surf_a Inner (anatomically-correct) boundary surface dataset (e.g. smoothwm.gii)
     * @param surf_b Outer (anatomically-correct) boundary surface dataset (e.g. pial.gii)
     * @param surf_intermed_pref Prefix for (anatomically-correct) intermediate surfaces, typically output by SurfLayers (default: isurf)
     * @param infl_surf_a Inner (inflated) boundary surface dataset (e.g. infl.smoothwm.gii)
     * @param infl_surf_b Outer (inflated) boundary surface dataset (e.g. infl.pial.gii)
     * @param infl_surf_intermed_pref Prefix for (inflated) intermediate surfaces, typically output by SurfLayers (default: infl.isurf)
     * @param both_lr_flag Specify an output spec for both hemispheres if surfaces for both exist
     * @param out_spec Name for output *.spec file (default: newspec.spec)
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "quickspecSL" as const,
        "surf_A": surf_a,
        "surf_B": surf_b,
        "both_lr_flag": both_lr_flag,
    };
    if (surf_intermed_pref !== null) {
        params["surf_intermed_pref"] = surf_intermed_pref;
    }
    if (infl_surf_a !== null) {
        params["infl_surf_A"] = infl_surf_a;
    }
    if (infl_surf_b !== null) {
        params["infl_surf_B"] = infl_surf_b;
    }
    if (infl_surf_intermed_pref !== null) {
        params["infl_surf_intermed_pref"] = infl_surf_intermed_pref;
    }
    if (out_spec !== null) {
        params["out_spec"] = out_spec;
    }
    return params;
}


function quickspec_sl_cargs(
    params: QuickspecSlParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("quickspecSL");
    cargs.push(
        "-surf_A",
        execution.inputFile((params["surf_A"] ?? null))
    );
    cargs.push(
        "-surf_B",
        execution.inputFile((params["surf_B"] ?? null))
    );
    if ((params["surf_intermed_pref"] ?? null) !== null) {
        cargs.push(
            "-surf_intermed_pref",
            (params["surf_intermed_pref"] ?? null)
        );
    }
    if ((params["infl_surf_A"] ?? null) !== null) {
        cargs.push(
            "-infl_surf_A",
            execution.inputFile((params["infl_surf_A"] ?? null))
        );
    }
    if ((params["infl_surf_B"] ?? null) !== null) {
        cargs.push(
            "-infl_surf_B",
            execution.inputFile((params["infl_surf_B"] ?? null))
        );
    }
    if ((params["infl_surf_intermed_pref"] ?? null) !== null) {
        cargs.push(
            "-infl_surf_intermed_pref",
            (params["infl_surf_intermed_pref"] ?? null)
        );
    }
    if ((params["both_lr_flag"] ?? null)) {
        cargs.push("-both_lr");
    }
    if ((params["out_spec"] ?? null) !== null) {
        cargs.push(
            "-out_spec",
            (params["out_spec"] ?? null)
        );
    }
    return cargs;
}


function quickspec_sl_outputs(
    params: QuickspecSlParameters,
    execution: Execution,
): QuickspecSlOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: QuickspecSlOutputs = {
        root: execution.outputFile("."),
        output_spec_file: ((params["out_spec"] ?? null) !== null) ? execution.outputFile([(params["out_spec"] ?? null)].join('')) : null,
    };
    return ret;
}


function quickspec_sl_execute(
    params: QuickspecSlParameters,
    execution: Execution,
): QuickspecSlOutputs {
    /**
     * This program makes a *.spec file after a set of intermediate surfaces have been generated with SurfLayers. It can also make a *.spec file that relates inflated surfaces to anatomically-correct surfaces.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `QuickspecSlOutputs`).
     */
    params = execution.params(params)
    const cargs = quickspec_sl_cargs(params, execution)
    const ret = quickspec_sl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function quickspec_sl(
    surf_a: InputPathType,
    surf_b: InputPathType,
    surf_intermed_pref: string | null = null,
    infl_surf_a: InputPathType | null = null,
    infl_surf_b: InputPathType | null = null,
    infl_surf_intermed_pref: string | null = null,
    both_lr_flag: boolean = false,
    out_spec: string | null = null,
    runner: Runner | null = null,
): QuickspecSlOutputs {
    /**
     * This program makes a *.spec file after a set of intermediate surfaces have been generated with SurfLayers. It can also make a *.spec file that relates inflated surfaces to anatomically-correct surfaces.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param surf_a Inner (anatomically-correct) boundary surface dataset (e.g. smoothwm.gii)
     * @param surf_b Outer (anatomically-correct) boundary surface dataset (e.g. pial.gii)
     * @param surf_intermed_pref Prefix for (anatomically-correct) intermediate surfaces, typically output by SurfLayers (default: isurf)
     * @param infl_surf_a Inner (inflated) boundary surface dataset (e.g. infl.smoothwm.gii)
     * @param infl_surf_b Outer (inflated) boundary surface dataset (e.g. infl.pial.gii)
     * @param infl_surf_intermed_pref Prefix for (inflated) intermediate surfaces, typically output by SurfLayers (default: infl.isurf)
     * @param both_lr_flag Specify an output spec for both hemispheres if surfaces for both exist
     * @param out_spec Name for output *.spec file (default: newspec.spec)
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `QuickspecSlOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(QUICKSPEC_SL_METADATA);
    const params = quickspec_sl_params(surf_a, surf_b, surf_intermed_pref, infl_surf_a, infl_surf_b, infl_surf_intermed_pref, both_lr_flag, out_spec)
    return quickspec_sl_execute(params, execution);
}


export {
      QUICKSPEC_SL_METADATA,
      QuickspecSlOutputs,
      QuickspecSlParameters,
      quickspec_sl,
      quickspec_sl_params,
};
